import React from "react";

const ArtworkCard = ({ artworkImg, title, description }) => {
  return (
    <div className="artworkCard">
      <div className="artworkCard__artworkImg">
        <img src={artworkImg} alt="" />
      </div>
      <div className="artworkCard__textbox">
        <h2 className="artTitle">{title}</h2>
        <h3 className="description">{description}</h3>
      </div>
    </div>
  );
};

export default ArtworkCard;
