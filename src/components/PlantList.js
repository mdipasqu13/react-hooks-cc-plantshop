import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantList }) {
  const renderPlantList = plantList.map((plant) => (
    <PlantCard key={plant.id} plant={plant} />
  ));

  return <ul className="plant-list">{renderPlantList}</ul>;
}

export default PlantList;