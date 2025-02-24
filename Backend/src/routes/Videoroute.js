const express = require ('express')
const router = express.Router()
const SuggestedComponent = require('../controllers/SuggestedComponent')


router.post('/videos', SuggestedComponent.createVideo);

// Get all videos
router.get('/videos', SuggestedComponent.getVideos);

// Get a video by ID
router.get('/videos/:id', SuggestedComponent.getVideoById);

// Update a video by ID
router.put('/videos/:id', SuggestedComponent.updateVideo);

// Delete a video by ID
router.delete('/videos/:id', SuggestedComponent.deleteVideo);

module.exports = router;