import React, { useState, useEffect }  from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  //creates state variables for plants and search
  //plants holds the plants array from the server, and setPlants updates the plants variable
  //search holds whatever the user has typed as input, and setSearch updates search's state variable
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState ('')

  //fetches plants data from the server then updates the plants state with the fetched data through setPlants(data)
  useEffect(() => { 
    fetch("http://localhost:6001/plants")
    .then(response => {
      if(response.ok){
        return response.json()
      } else {
        console.error('Could not fetch data')
      }
    })
    .then(data => setPlants(data))
  }, [])
  //takes newPlant as a parameter and updates the plants state variable by adding the newPlant to the list
  const addPlant = (newPlant) => {
    setPlants([...plants, newPlant])
  }
  //updateSearch takes the newSearch query input by the user and updates the state with setSearch
  function updateSearch(newSearch){
    setSearch(newSearch)
  }
  //filters the plants array based on user's search input. changes everything to lower case so that case doesn't matter. 
  const displayedPlants = plants.filter((plant) => {
    return plant.name.toString().toLowerCase().includes(search.toLowerCase());
  });
  //deletes a plant by taking the id of the plant and removing the plant with the matching id. 
  const deletePlant =(id) => {
    const updatedPlants = plants.filter((plant) => plant.id!== id);
    setPlants(updatedPlants);
  }
  //returns JSX that includes NewPlantForm, Search and PlantList components
  //passes the addPlant, search, updatesearch, plants and deletePlant props to these components
  return (
    <main>
      <NewPlantForm addPlant={addPlant} />
      <Search search={search} updateSearch={updateSearch}/>
      <PlantList plants={displayedPlants} deletePlant={deletePlant}/>
    </main>
  );
}

export default PlantPage;