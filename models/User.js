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
  created: {
    type: Date,
    default: Date.now,
  },
  accounts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'accounts',
    },
  ],
});

module.exports = User = mongoose.model('user', UserSchema);
