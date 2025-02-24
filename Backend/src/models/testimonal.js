const mongoose = require('mongoose');

const TestimonialSchema = new mongoose.Schema({
  imageSrc: String,
  name: String,
  position: String,
  quote: String,
  rating: Number,
}, { timestamps: true });

module.exports = mongoose.model('Testimonial', TestimonialSchema);