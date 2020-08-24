const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  balance: {
    type: Number,
    required: true,
    default: 0.0,
  },
  created: {
    type: Date,
    default: Date.now(),
  },
  type: {
    type: String,
    enum: ['savings', 'chequing', 'investing'],
    required: true,
  },
  snapshots: [
    {
      date: {
        type: Date,
        required: true,
      },
      balance: {
        type: Number,
        required: true,
      },
    },
  ],
  transactions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'transaction',
    },
  ],
});

module.exports = Account = mongoose.model('account', AccountSchema);
