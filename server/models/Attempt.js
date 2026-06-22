const mongoose = require('mongoose');

const attemptSchema = new mongoose.Schema({
  session_id: {
    type: String,
    required: true,
    index: true
  },
  module_id: {
    type: Number,
    required: true,
    index: true
  },
  // Snapshot fields — preserved even if module data changes later
  module_title: { type: String, required: true },
  module_tag: { type: String, default: '—' },
  difficulty: { type: String, enum: ['low', 'med', 'high', '—'], default: '—' },
  // Activity tracking
  risk_score: { type: Number, default: 0 },
  data_exposed: { type: [String], default: [] },
  fields_filled: { type: [String], default: [] },
  submitted: { type: Boolean, default: false },
  // Quiz results
  quiz_score: { type: Number, default: 0 },
  quiz_total: { type: Number, default: 0 },
  // Metadata
  completed_at: { type: Date, default: Date.now },
  ip_address: { type: String, default: null }
}, {
  timestamps: true
});

// Compound index for fast queries by session + module
attemptSchema.index({ session_id: 1, module_id: 1 });

module.exports = mongoose.model('Attempt', attemptSchema);