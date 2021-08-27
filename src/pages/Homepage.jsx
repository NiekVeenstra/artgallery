import React from "react";
import ArtworkCard from "../components/ArtworkCard";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="galleryContainer">
        <h2 className="title">Work Gallery</h2>
        <div className="galleryInnerContainer">
          <ArtworkCard
            artworkImg={"https://i.postimg.cc/RZ1zNHnZ/Shroom-King.png"}
            title={"Shroom King Charlie"}
            description={"blablablablabala"}
          />
          <ArtworkCard
            artworkImg={"https://i.postimg.cc/RZ1zNHnZ/Shroom-King.png"}
            title={"Shroom King Charlie"}
            description={"blablablablabala"}
          />
          <ArtworkCard
            artworkImg={"https://i.postimg.cc/RZ1zNHnZ/Shroom-King.png"}
            title={"Shroom King Charlie"}
            description={"blablablablabala"}
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
