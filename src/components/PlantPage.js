import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plantList, searchTerm }) {
  return (
    <main>
      <PlantList plantList={plantList} searchTerm={searchTerm}/>
    </main>
  );
}

export default PlantPage;