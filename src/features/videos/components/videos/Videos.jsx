import React, { useState, useEffect } from "react";

import { VideoCard } from "../videoCard/VideoCard";

import "./Videos.scss";

function Videos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  async function getVideos() {
    try {
      const videos = await fetch(
        "http://localhost:3000/videos"
      ).then(response => response.json());
      setVideos(videos);
    } catch (err) {
      console.error(err);
    }
  }

  function handleBuy(video) {
    console.log('click!!', video)
  }

  return (
    <div className="Videos">
      <h1>Videos</h1>
      <div className="Videos__grid">
        {videos.map(video => (
          <VideoCard
            className="Videos__item"
            key={video.id}
            data={video}
            onBuy={handleBuy}
          />
        ))}
      </div>
    </div>
  );
}

export { Videos };
