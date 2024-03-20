import React from "react";
import PlantCard from "./PlantCard";

//PlantList component that takes in 2 props, the plants array/object and deletePlant
function PlantList({ plants, deletePlant }) {
//plants.map((plant) => maps over the plants array and returns a PlantCard component for each plant. 
//each PlantCard is passed 3 props: key, plant and deletePlant
  return (
    <ul className="cards">
      {plants.map((plant) => {
        return (
          <PlantCard
            key={plant.id}
            plant={plant}
            deletePlant={deletePlant}
          />
        );
      })}
    </ul>
  );
}


export default PlantList;