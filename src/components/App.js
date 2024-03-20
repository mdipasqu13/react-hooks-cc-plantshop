import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
//I kept this parent file simple. It imports data from Header and PlantPage, and returns the basic structure of our
//JSX including a div containing Header and PlantPage
function App() {
  

  return (
    <div className="app">
      <Header />
      <PlantPage />
    </div>
  );
}

export default App;