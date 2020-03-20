import React from "react";
import "./VideoCard.scss";

function VideoCard(props) {
  const { title, description, urlVideo } = props;

  return (
    <div className="VideoCard">
      <div className="VideoCard__video">
        <video src={urlVideo}></video>
      </div>
      <div className="VideoCard__description">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export {
  VideoCard
}
