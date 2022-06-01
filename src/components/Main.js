import React, { useState, useEffect } from "react";
import instagramLogo from "../assets/owner/instagram.png";
import twitterLogo from "../assets/owner/twitter.png";
import moreIcon from "../assets/owner/more.png";
import "./Main.css";

function Main({ punkListData, selectedPunk }) {
  const [activePunk, setActivePunk] = useState(punkListData[0]);

  useEffect(() => {
    setActivePunk(punkListData[selectedPunk]);
  }, [punkListData, selectedPunk]);

  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkHighlight">
          <div className="punkContainer">
            <img
              src={activePunk.image_url}
              alt="selectedPunk"
              className="selectedPunk"
            />
          </div>
        </div>
        <div className="punkDetails" style={{ color: "#fff" }}>
          <div className="title">{activePunk.name}</div>
          <span className="itemNumber">.#{activePunk.token_id}</span>
        </div>
        <div className="owner">
          <div className="ownerImageContainer">
            <img
              src={activePunk.owner.profile_img_url}
              alt="ownerImage"
              className="ownerImage"
            />
          </div>
          <div className="ownerDetails">
            <div className="ownerNameAndHandle">
              <div>{activePunk.owner.address}</div>
              <div className="ownerHandle">
                {activePunk.owner.user.username}
              </div>
            </div>
            <div className="ownerLink">
              <img src={instagramLogo} alt="instagramLogo" />
            </div>
            <div className="ownerLink">
              <img src={twitterLogo} alt="twitterLogo" />
            </div>
            <div className="ownerLink">
              <img src={moreIcon} alt="moreicon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
