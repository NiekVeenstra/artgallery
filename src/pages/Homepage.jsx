import React from "react";
import { Link } from "react-router-dom";
import ArtworkCard from "../components/ArtworkCard";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="galleryContainer">
        <h2 className="title">Work Gallery</h2>
        <div className="galleryInnerContainer">
          <Link to="/artwork">
            <ArtworkCard
              artworkImg={"https://i.postimg.cc/RZ1zNHnZ/Shroom-King.png"}
              title={"Shroom King Charlie"}
              description={"blablablablabala"}
            />
          </Link>
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
