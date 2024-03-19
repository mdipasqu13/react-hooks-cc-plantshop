import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [search, setSearch] = useState('')
  const [plantList, setPlantList] = useState([]);
  
  // const updateSort = (value) => {
  //   //deal with conversion from string to bool 
  //   if(value === "true"){
  //     setSort(true)
  //   } else {
  //     setSort(false)
  //   }
  // }



  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(res => {
        if(res.ok){
          return res.json()
        } else {
          console.error ('oh no')
        }
      })
      .then(data => setPlantList(data))
    }, [])
        
  //       res.json())
  //     .then((data) => {
  //       console.log(data.plants);
  //       setPlantList(data.plants);
  //     });
  // }, []);

    //   const filteredPlants = plantList.filter(item => {
    //   const lowerSearch = search.toLowerCase()
    //   const lowerItem = item.description.toLowerCase();
    //   return lowerItem.includes(lowerSearch);
    //   }); ___________FROM HERE UP WAS LAST CHANGE__________
    // //   if(lowerItem.includes(lowerSearch)){
    //     return true
    //   } else {
    //     return false
    //   }
    //   //return item.description.toLowerCase().includes(search.toLowerCase())
    // })

  

    // const addItem = (newItem) => {
    //   setPlantList([...plantList, newItem])
    // }

  return (
    <div className="app">
      <Header updateSearch={(value) => {setSearch(value)}}/>
      <PlantPage plantList={plantList} />
    </div>
  );
}

export default App;
