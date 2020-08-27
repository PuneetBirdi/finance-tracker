const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
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
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = User = mongoose.model('user', UserSchema);
