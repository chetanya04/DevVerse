const Video = require('../models/Video')

exports.createVideo = async (req, res) => {
  try {
    const video = new Video({
      thumbnail: req.body.thumbnail,
      video_url: req.body.video_url,
    });
    await video.save();
    res.status(201).send(video);
  } catch (error) {
    res.status(400).send({ error: 'Failed to create video', details: error.message });
  }
}

exports.getVideos = async (req,res)=>{
   try {
       const videos = await Video.find()
       res.status(200).send(videos)
   } catch (error) {
        res.status(500).send({error: 'Failed to fetch videos', details: error})
   }
}

//Get video by ID
exports.getVideoById = async (req, res) => {
    try {
      const video = await Video.findById(req.params.id);
      if (!video) {
        return res.status(404).send({ error: 'Video not found' });
      }
      res.status(200).send(video);
    } catch (error) {
      res.status(500).send({ error: 'Failed to fetch video', details: error });
    }
  };

  //Get video by ID
  exports.updateVideo = async (req, res) => {
    try {
      const video = await Video.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!video) {
        return res.status(404).send({ error: 'Video not found' });
      }
      res.status(200).send(video);
    } catch (error) {
      res.status(400).send({ error: 'Failed to update video', details: error });
    }
  };

  //Delete a Video by ID
  exports.deleteVideo = async (req, res) => {
    try {
      const video = await Video.findByIdAndDelete(req.params.id);
      if (!video) {
        return res.status(404).send({ error: 'Video not found' });
      }
      res.status(200).send({ message: 'Video deleted successfully' });
    } catch (error) {
      res.status(500).send({ error: 'Failed to delete video', details: error });
    }
  };