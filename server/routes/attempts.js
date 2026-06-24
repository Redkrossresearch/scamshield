const express = require('express');
const Attempt = require('../models/Attempt');
const Session = require('../models/Session');
const Module = require('../models/Module');
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

// ─── POST /api/attempt ─────────────────────────────────────────────────────
// Log a module attempt
router.post('/', async (req, res) => {
  try {
    const data = req.body;
    
    // Extract user_id from auth token
    const user_id = getUserFromToken(req);
    if (user_id) {
      data.user_id = user_id;
    }
    console.log('Attempt - user_id:', user_id, 'module:', data.module_id);
    
    // Validate required fields
    if (!data.session_id || data.module_id === undefined) {
      return res.status(400).json({
        ok: false,
        err: 'session_id and module_id are required.'
      });
    }
    
    // Update session stats
    const session = await Session.findOne({ session_id: data.session_id });
    if (session) {
      session.last_seen = new Date();
      session.total_attempts = await Attempt.countDocuments({ session_id: data.session_id });
      
      // Link session to user if not already linked
      if (!session.user_id && user_id) {
        session.user_id = user_id;
      }
      
      if (data.submitted) {
        session.total_risk_score = Math.max(session.total_risk_score || 0, data.risk_score || 0);
        session.modules_completed = await Attempt.countDocuments({
          session_id: data.session_id,
          submitted: true,
          module_id: { $gte: 0 }
        });
      }
      await session.save();
    }
    
    // Check if attempt already exists (for update instead of create)
    const existing = await Attempt.findOne({
      session_id: data.session_id,
      module_id: data.module_id
    });
    
    if (existing) {
      // Update existing attempt
      Object.assign(existing, data, { completed_at: new Date() });
      await existing.save();
      console.log('Attempt updated, user_id:', existing.user_id);
      return res.json({
        ok: true,
        message: 'Attempt updated.',
        attempt_id: existing._id
      });
    } else {
      // Create new attempt
      const attempt = new Attempt(data);
      await attempt.save();
      console.log('Attempt created, user_id:', attempt.user_id);
      res.status(201).json({
        ok: true,
        message: 'Attempt logged.',
        attempt_id: attempt._id
      });
    }
  } catch (error) {
    console.error('Attempt log error:', error);
    res.status(500).json({
      ok: false,
      err: 'Failed to log attempt.'
    });
  }
});

// ─── GET /api/attempt/session/:sessionId ───────────────────────────────────
// Get all attempts for a session
router.get('/session/:sessionId', async (req, res) => {
  try {
    const attempts = await Attempt.find({ session_id: req.params.sessionId })
      .sort({ completed_at: -1 });
    res.json({ ok: true, attempts });
  } catch (error) {
    res.status(500).json({ ok: false, err: 'Failed to fetch attempts.' });
  }
});

module.exports = router;