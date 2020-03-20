import React from "react";
import "./VideoCard.scss";

function VideoCard(props) {
  const {
    data,
    data: { title, price, description, sources },
    className = "",
    onBuy = () => {}
  } = props;

  return (
    <div className={`VideoCard ${className}`}>
      <div className="VideoCard__video">
        <video controls preload="none">
          {sources.map((source, id) => (
            <source key={id} src={source} />
          ))}
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="VideoCard__description">
        <h2>{title}</h2>
        <h3>Precio: S/ {price}</h3>
        <p>{description}</p>
      </div>
      <div className="VideoCard__buttons">
        <button
          onClick={onBuy.bind(null, data)}
          className="btn btn-primary btn-full-width m-0"
        >
          Comprar
        </button>
      </div>
    </div>
  );
}

export { VideoCard };
