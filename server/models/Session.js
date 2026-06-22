const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  session_id: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  started_at: {
    type: Date,
    default: Date.now
  },
  last_seen: {
    type: Date,
    default: Date.now
  },
  ip_address: {
    type: String,
    default: null
  },
  user_agent: {
    type: String,
    default: null
  },
  country: {
    type: String,
    default: null
  },
  device_type: {
    type: String,
    enum: ['mobile', 'desktop', 'tablet', 'unknown'],
    default: 'unknown'
  }
}, {
  timestamps: true  // adds createdAt and updatedAt automatically
});

// Auto-delete sessions older than 90 days (optional cleanup)
sessionSchema.index({ last_seen: 1 }, { expireAfterSeconds: 60 * 60 * 24 * 90 });

module.exports = mongoose.model('Session', sessionSchema);