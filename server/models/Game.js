const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  session_id: {
    type: String,
    required: true,
    index: true
  },
  game_id: {
    type: String,
    required: true,
    index: true
  },
  game_title: { type: String, default: '' },
  score: { type: Number, default: 0 },
  correct: { type: Number, default: 0 },
  wrong: { type: Number, default: 0 },
  total: { type: Number, default: 0 },
  completed_at: { type: Date, default: Date.now },
  ip_address: { type: String, default: null }
}, {
  timestamps: true
});

module.exports = mongoose.model('Game', gameSchema);