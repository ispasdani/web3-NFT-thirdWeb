import React from "react";
import weth from "../assets/weth.png";
import "../components/CollectionCard.css";

function CollectionCard({ id, name, traits, image }) {
  return (
    <div className="collectionCard">
      <img src={image} alt="punkImage" />
      <div className="details">
        <div className="name">
          {name} <div className="id">.#{id}</div>
        </div>
        <div className="priceContainer">
          <img src={weth} alt="wethImage" className="wethImage" />
          <div className="price">{traits[0].value}</div>
        </div>
      </div>
    </div>
  );
}

export default CollectionCard;
