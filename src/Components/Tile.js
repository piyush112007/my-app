import React from "react";

export default function Tile({ title, image, onClick }) {
  return (
    <>
      <div
        className="main"
        onClick={() => {
          console.log("Tile clicked:", title);
          onClick();
        }}
      >
        <div className="PokeImage">
          <img src={image} alt="" id="DefImage" />
        </div>
        <div className="PokeDetails">
          <h6>{title}</h6>
        </div>
      </div>
    </>
  );
}
