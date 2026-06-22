// const express = require('express');
// const router = express.Router();

// router.get('/test', (req, res) => {
//   res.json({ ok: true, message: 'Games route working' });
// });

// module.exports = router;

const express = require('express');
const Game = require('../models/Game');
const Session = require('../models/Session');
const router = express.Router();

// ─── POST /api/game/result ─────────────────────────────────────────────────
// Log a game result
router.post('/result', async (req, res) => {
  try {
    const data = req.body;

    if (!data.session_id || !data.game_id) {
      return res.status(400).json({
        ok: false,
        err: 'session_id and game_id are required.'
      });
    }

    // Calculate percentage if not provided
    if (data.percentage === undefined && data.total > 0) {
      data.percentage = Math.round((data.correct / data.total) * 100);
    }

    // Create game result
    const game = new Game(data);
    await game.save();

    // Update session last_seen
    await Session.findOneAndUpdate(
      { session_id: data.session_id },
      { last_seen: new Date() }
    );

    res.status(201).json({
      ok: true,
      message: 'Game result logged.',
      game_id: game._id
    });

  } catch (error) {
    console.error('Game result error:', error);
    res.status(500).json({
      ok: false,
      err: 'Failed to log game result.'
    });
  }
});

// ─── GET /api/game/session/:sessionId ──────────────────────────────────────
// Get all game results for a session
router.get('/session/:sessionId', async (req, res) => {
  try {
    const games = await Game.find({ session_id: req.params.sessionId })
      .sort({ completed_at: -1 });

    res.json({ ok: true, games });
  } catch (error) {
    res.status(500).json({ ok: false, err: 'Failed to fetch game results.' });
  }
});

module.exports = router;