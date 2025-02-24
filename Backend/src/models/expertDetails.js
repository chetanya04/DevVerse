const mongoose = require('mongoose');

// Expert Schema
const expertSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  photo: {
    type: String, // Store the filename of the uploaded photo
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
});

const Expert = mongoose.model('ExpertDetails', expertSchema);

module.exports = Expert;
