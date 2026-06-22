const mongoose = require('mongoose');

const fieldSchema = new mongoose.Schema({
  n: { type: String, required: true },  // field name (for validator)
  p: { type: String, required: true },  // placeholder text
  t: { type: String, required: true }   // input type (text, tel, email, password, number)
}, { _id: false });

const quizOptionSchema = new mongoose.Schema({
  q: { type: String, required: true },
  opts: { type: [String], required: true },
  ans: { type: Number, required: true },
  exp: { type: String, required: true }
}, { _id: false });

const moduleSchema = new mongoose.Schema({
  module_id: {
    type: Number,
    required: true,
    unique: true,
    index: true
  },
  icon: { type: String, default: '📦' },
  title: { type: String, required: true },
  desc: { type: String, required: true },
  diff: { type: String, enum: ['low', 'med', 'high'], default: 'med' },
  tag: { type: String, default: 'General' },
  url: { type: String, default: '' },
  badge: { type: String, default: '' },
  amount: { type: String, default: '' },
  amountLabel: { type: String, default: '' },
  fee: { type: String, default: '' },
  feeNote: { type: String, default: '' },
  fields: { type: [fieldSchema], default: [] },
  exposed: { type: [String], default: [] },
  reveal: { type: String, default: '' },
  flags: { type: [String], default: [] },
  tips: { type: [String], default: [] },
  quiz: { type: [quizOptionSchema], default: [] },
  active: { type: Boolean, default: true },
  order: { type: Number, default: 0 }
}, {
  timestamps: true
});

module.exports = mongoose.model('Module', moduleSchema);