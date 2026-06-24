const express = require('express');
const Session = require('../models/Session');
const Attempt = require('../models/Attempt');
const jwt = require('jsonwebtoken');
const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET || 'scamshield2024superSecretKey123';

// Helper: extract user from token
function getUserFromToken(req) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) return null;
  try {
    const decoded = jwt.verify(authHeader.split(' ')[1], JWT_SECRET);
    return decoded.user_id || null;
  } catch (e) {
    return null;
  }
}

// ─── POST /api/session/start ───────────────────────────────────────────────
router.post('/start', async (req, res) => {
  try {
    const { session_id } = req.body;
    const user_id = getUserFromToken(req);
    console.log('Session start - user_id:', user_id, 'session_id:', session_id);

    let session;
    if (session_id) {
      session = await Session.findOne({ session_id: session_id });
      if (session) {
        session.last_seen = new Date();
        session.total_attempts = await Attempt.countDocuments({ session_id: session.session_id });
        // Link to user if not already linked
        if (!session.user_id && user_id) {
          session.user_id = user_id;
        }
        await session.save();
        return res.json({
          ok: true,
          session_id: session.session_id,
          resumed: true
        });
      }
    }

    // Create new session
    session = new Session({
      session_id: session_id || 'ss_' + Date.now() + '_' + Math.random().toString(36).slice(2, 9),
      user_id: user_id,
      ip_address: req.ip || req.connection.remoteAddress || 'unknown',
      user_agent: req.headers['user-agent'] || '',
      device: req.headers['user-agent'] && req.headers['user-agent'].includes('Mobile') ? 'mobile' : 'desktop'
    });
    await session.save();
    console.log('Session created:', session.session_id, 'user:', user_id);

    res.status(201).json({
      ok: true,
      session_id: session.session_id,
      resumed: false
    });
  } catch (error) {
    console.error('Session start error:', error);
    res.status(500).json({
      ok: false,
      err: 'Failed to create session.'
    });
  }
});

// ─── POST /api/session/heartbeat ───────────────────────────────────────────
router.post('/heartbeat', async (req, res) => {
  try {
    const { session_id } = req.body;
    if (!session_id) {
      return res.status(400).json({ ok: false, err: 'session_id required.' });
    }
    const session = await Session.findOne({ session_id });
    if (!session) {
      return res.status(404).json({ ok: false, err: 'Session not found.' });
    }
    session.last_seen = new Date();
    await session.save();
    res.json({ ok: true });
  } catch (error) {
    res.status(500).json({ ok: false, err: 'Heartbeat failed.' });
  }
});

module.exports = router;