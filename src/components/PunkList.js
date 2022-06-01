import React from "react";
import CollectionCard from "./CollectionCard";
import "./PunkList.css";

function PunkList({ punkListData, setSelectedPunk }) {
  return (
    <div className="punkList">
      {punkListData.map((punk) => (
        <div onClick={() => setSelectedPunk(punk.token_id)} key={punk.token_id}>
          <CollectionCard
            image={punk.image_url}
            id={punk.token_id}
            name={punk.name}
            traits={punk.traits}
          />
        </div>
      ))}
    </div>
  );
}

export default PunkList;
