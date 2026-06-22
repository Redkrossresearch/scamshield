// const express = require('express');
// const router = express.Router();

// router.get('/test', (req, res) => {
//   res.json({ ok: true, message: 'Attempts route working' });
// });

// module.exports = router;
const express = require('express');
const Attempt = require('../models/Attempt');
const Session = require('../models/Session');
const Module = require('../models/Module');
const router = express.Router();

// ─── POST /api/attempt ─────────────────────────────────────────────────────
// Log a module attempt
router.post('/', async (req, res) => {
  try {
    const data = req.body;

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
      if (data.submitted) {
        session.total_risk_score = Math.max(session.total_risk_score || 0, data.risk_score || 0);
        session.modules_completed = await Attempt.countDocuments({
          session_id: data.session_id,
          submitted: true,
          module_id: { $gte: 0 }  // Count modules, not games (games use module_id: -1)
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

      return res.json({
        ok: true,
        message: 'Attempt updated.',
        attempt_id: existing._id
      });
    } else {
      // Create new attempt
      const attempt = new Attempt(data);
      await attempt.save();

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