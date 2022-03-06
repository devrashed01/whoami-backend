const mongoose = require('mongoose');

const Skill = mongoose.model('Skill', new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  release_date: String,
  creator: String,
  progress: {
    type: Number,
    default: 0,
  },
}));

module.exports = Skill;
