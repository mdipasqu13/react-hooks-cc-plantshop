import React, { useState } from "react";
//made a function component: PlantCard, that takes in 2 props: plant and deletePlant
function PlantCard({ plant, deletePlant }) { 
//this sets a state variable with useState. setSoldOut should update the soldOut variable, and useState(true) 
//sets the initial value of soldOut to true
//const handleClick toggles the soldOut variable state between true and false
  const [soldOut, setSoldOut] = useState(true)

  const handleClick = () => {
    setSoldOut(prev => !prev)
  }
//this is my delete button. when the delete button is clicked, handleDelete sends a 'Delete' request to the server to 
//delete the plant with the corresponding plant.id. This should permanently remove the object with that id from the server
  const handleDelete = () =>{
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: 'DELETE'
    })
    .then(res => {
      if(res.ok){
        return res.json()
      }else {
        console.error('error deleting plant')
      }
    })
    .then(() => deletePlant(plant.id))
  }
//our return gives us JSX that includes our plant cards: including their images, names and price. 
//there is a button added which when cicked toggles between "In Stock" and "Out of Stock"
//there is a second button which when clicked calls the handleDelete function from above
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {soldOut ? (
        <button onClick={handleClick} className="primary">In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
      <button onClick={() => handleDelete()}>Delete</button>
    </li>
  );
}

export default PlantCard;