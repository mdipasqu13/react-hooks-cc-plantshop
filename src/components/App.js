import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [search, setSearch] = useState('')
  const [plantList, setPlantList] = useState([]);
  const [filteredPlantList, setFilteredPlantList] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(res => {
        if(res.ok){
          return res.json()
        } else {
          console.error ('oh no')
        }
      })
      .then(data => {
        setPlantList(data)
        setFilteredPlantList(data)
      })
      
    }, [])

    useEffect(() => {
      const filteredPlants = plantList.filter(plant =>
        plant.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredPlantList(filteredPlants);
    }, [search, plantList]);

  return (
    <div className="app">
      <Header updateSearch={(value) => {setSearch(value)}}/>
      <PlantPage plantList={filteredPlantList} />
    </div>
  );
}

export default App;
