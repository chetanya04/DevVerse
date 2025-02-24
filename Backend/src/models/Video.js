const mongoose = require('mongoose')


    const videoSchema = new mongoose.Schema({
    thumbnail: {
        type: String,
        required: true, 
    },
    video_url: {
        type: String,
        required: true
    }
})


const Video = mongoose.model('Video', videoSchema)

module.exports = Video