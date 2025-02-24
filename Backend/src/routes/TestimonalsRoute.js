const express = require('express');
const router = express.Router();
const TestimonialController = require('../controllers/testoController');

// Create
router.post('/', TestimonialController.createTestimonial);

// Read
router.get('/', TestimonialController.getTestimonials);

// Update
router.put('/:id', TestimonialController.updateTestimonial);

// Delete
router.delete('/:id', TestimonialController.deleteTestimonial);

module.exports = router;
