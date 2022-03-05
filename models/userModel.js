const mongoose = require('mongoose');

const User = mongoose.model('User', new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  profession: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    default: 1,
  },
}));

module.exports = User;
