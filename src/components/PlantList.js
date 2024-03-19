import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantList }) {
  return (
    <ul className="cards">
      {plantList.map((plants) => (
        <PlantCard key={plants.id} plants={plants} />
      ))
      /* render PlantCards components in here */}</ul>
  );
}

export default PlantList;
