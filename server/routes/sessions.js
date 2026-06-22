// const express = require('express');
// const router = express.Router();

// router.get('/test', (req, res) => {
//   res.json({ ok: true, message: 'Sessions route working' });
// });

// module.exports = router;
const express = require('express');
const Session = require('../models/Session');
const Attempt = require('../models/Attempt');
const router = express.Router();

// ─── POST /api/session/start ───────────────────────────────────────────────
// Create a new session or resume existing one
router.post('/start', async (req, res) => {
  try {
    const { session_id } = req.body;

    let session;

    if (session_id) {
      // Try to resume existing session
      session = await Session.findOne({ session_id: session_id });
      if (session) {
        session.last_seen = new Date();
        session.total_attempts = await Attempt.countDocuments({ session_id: session.session_id });
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
      ip_address: req.ip || req.connection.remoteAddress || 'unknown',
      user_agent: req.headers['user-agent'] || '',
      device: req.headers['user-agent']?.includes('Mobile') ? 'mobile' : 'desktop'
    });

    await session.save();

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
// Update last_seen timestamp (keep-alive)
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