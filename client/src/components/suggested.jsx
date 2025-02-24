import React, { useEffect, useState } from "react";
import "../suggested.css"
import styles from "../HomePage.module.css"
import { Box} from '@mui/material';
import axios from "axios";

const SuggestedVideos = () => {
  const [videos, setVideos]=useState([])

  useEffect(()=>{
    const fetchVideo = async()=>{
      try {
        const reponse = await axios.get('http://localhost:5000/api/videos')
        setVideos(reponse.data)
      } catch (error) {
        console.log("Error Fetching Videos", error);
      }
    }
    fetchVideo();
  },[])



    return (
        <div>
            <Box>
   
  </Box>
      <div className="video-suggestions-container">
        {videos.map((video)=>(
          <div className="video-card">
          <div className="video-thumbnail" key={video._id}>
            <img src={video.thumbnail} alt="Suggested Video Thumbnail" />
            <a href={video.video_url} target="blank" rel="noopener noreferrer"><button className="play-button">▶</button> </a>
          </div>
          <div className="video-info">
            <h3>Web Development</h3>
            <p>How it will be more useful?</p>
            <div className="rating">
              <span>★</span> <span>4.0</span>
            </div>
          </div>
          <div className="share-button">🔗</div>
        </div>
        ))}
  
        {/* <div className="video-card">
          <div className="video-thumbnail">
            <img src="/sugg2.png" alt="Web Development Video 2" />
            <a href="https://www.youtube.com/watch?v=sr-GQmv7hY0&list=PLtDSJw_HPKDDYt4syB54bOCTdxMy8OuDv&index=93&ab_channel=KishanMahipal" target="blank"><button className="play-button">▶</button></a>
          </div> 
          <div className="video-info">
            <h3>Web Development</h3>
            <p>How it will be more useful?</p>
            <div className="rating">
              <span>★</span> <span>4.0</span>
            </div>
          </div>
          <div className="share-button">🔗</div>
        </div> */}
      </div>
      </div>
    );
  };
  
  export default SuggestedVideos;