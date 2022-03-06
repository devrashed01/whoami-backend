const mongoose = require('mongoose');

const Project = mongoose.model('Project', new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  release_date: String,
  tags: [String],
  demo_url: String,
  preview_image_src: String,
}));

module.exports = Project;
