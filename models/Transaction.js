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
  type: {
    type: String,
    enum: ['deposit', 'withdrawal', 'purchase', 'sale'],
  },
});

module.exports = Transaction = mongoose.model('transaction', TransactionSchema);
