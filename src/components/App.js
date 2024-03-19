// import React, { useEffect, useState } from "react";
// import Header from "./Header";
// import PlantPage from "./PlantPage";

// function App() {
//   const [search, setSearch] = useState('')
//   const [plantList, setPlantList] = useState([]);
  
//   // const updateSort = (value) => {
//   //   //deal with conversion from string to bool 
//   //   if(value === "true"){
//   //     setSort(true)
//   //   } else {
//   //     setSort(false)
//   //   }
//   // }



//   useEffect(() => {
//     fetch("http://localhost:6001/plants")
//       .then(res => {
//         if(res.ok){
//           return res.json()
//         } else {
//           console.error ('oh no')
//         }
//       })
//       .then(data => setPlantList(data))
//     }, [])
        
//   //       res.json())
//   //     .then((data) => {
//   //       console.log(data.plants);
//   //       setPlantList(data.plants);
//   //     });
//   // }, []);

//     const filteredPlants = plants.filter(item => {
//       const lowerSearch = search.toLowerCase()
//       const lowerItem = item.description.toLowerCase()
//       if(lowerItem.includes(lowerSearch)){
//         return true
//       } else {
//         return false
//       }
//       //return item.description.toLowerCase().includes(search.toLowerCase())
//     })

//     const sortedPlants = filteredPlants.sort((curItem, nextItem) => {
//       if(sort){ //A-Z
//         return curItem.location.localeCompare(nextItem.location)
//       } else { //Z-A
//         return nextItem.location.localeCompare(curItem.location)
//       }
//     })


//     const addItem = (newItem) => {
//       setPlantList([...plantList, newItem])
//     }

  

//   return (
//     <div className="app">
//       <Header updateSearch={(value) => {setSearch(value)}}/>
//       <PlantPage plantList={plantList} searchTerm={searchTerm} />
//     </div>
//   );
// }

// export default App;

import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [search, setSearch] = useState('');
  const [plantList, setPlantList] = useState([]);
  const [sort, setSort] = useState(true); // Default sort state

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(res => {
        if(res.ok){
          return res.json();
        } else {
          throw new Error('Failed to fetch data');
        }
      })
      .then(data => setPlantList(data))
      .catch(error => console.error(error)); // Handle fetch error
  }, []);

  const handleSortToggle = () => {
    setSort(prevSort => !prevSort); // Toggle sort state
  };

  const filteredPlants = plantList.filter(item => {
    const lowerSearch = search.toLowerCase();
    const lowerItem = item.description.toLowerCase();
    return lowerItem.includes(lowerSearch);
  });

  const sortedPlants = filteredPlants.sort((curItem, nextItem) => {
    if(sort) { // A-Z
      return curItem.location.localeCompare(nextItem.location);
    } else { // Z-A
      return nextItem.location.localeCompare(curItem.location);
    }
  });

  const addItem = (newItem) => {
    setPlantList(prevList => [...prevList, newItem]);
  };

  return (
    <div className="app">
      <Header updateSearch={setSearch} toggleSort={handleSortToggle} />
      <PlantPage plantList={sortedPlants} />
    </div>
  );
}

export default App;