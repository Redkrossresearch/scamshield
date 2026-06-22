// const express = require('express');
// const router = express.Router();

// router.get('/test', (req, res) => {
//   res.json({ ok: true, message: 'Modules route working' });
// });

// module.exports = router;

const express = require('express');
const Module = require('../models/Module');
const router = express.Router();

// ─── GET /api/modules ──────────────────────────────────────────────────────
// Get all active modules (for the home page grid)
router.get('/', async (req, res) => {
  try {
    const modules = await Module.find({ active: true })
      .sort({ order: 1, module_id: 1 });

    res.json({ ok: true, modules });
  } catch (error) {
    console.error('Fetch modules error:', error);
    res.status(500).json({ ok: false, err: 'Failed to fetch modules.' });
  }
});

// ─── GET /api/modules/:id ──────────────────────────────────────────────────
// Get a single module by ID
router.get('/:id', async (req, res) => {
  try {
    const module = await Module.findOne({
      module_id: parseInt(req.params.id),
      active: true
    });

    if (!module) {
      return res.status(404).json({
        ok: false,
        err: 'Module not found.'
      });
    }

    res.json({ ok: true, module });
  } catch (error) {
    res.status(500).json({ ok: false, err: 'Failed to fetch module.' });
  }
});

module.exports = router;