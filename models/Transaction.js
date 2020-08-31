const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  account: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'account',
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
    default: Date.now(),
  },
  to: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'account',
  },
  type: {
    type: String,
    enum: ['deposit', 'withdrawal', 'transfer'],
  },
});

module.exports = Transaction = mongoose.model('transaction', TransactionSchema);
