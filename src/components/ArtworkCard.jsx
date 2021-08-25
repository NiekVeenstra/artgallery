import React from "react";

const ArtworkCard = ({artworkImg, title, description}) => {
  return (
    <div className="artworkCard">
      <div className="artworkImg"><img src={artworkImg} alt="" /></div>
      <div className="textbox">
        <h2 className="title">{title}</h2>
        <h3 className="description">{description}</h3>
      </div>
    </div>
  );
};

export default ArtworkCard;
