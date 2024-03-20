import React, { useState } from 'react';


//creates a component PlantCard that takes 2 props: plant and deletePlant
//declares a state variable newPrice, and setNewPrice is used to update the value of newPrice
//declares a state variable updatedPlantPrice, and setUpdatedPlantPrice is used to update the value of updatedPlantPrice
function PlantCard({ plant, deletePlant }) {
  const [newPrice, setNewPrice] = useState('');
  const [updatedPlantPrice, setUpdatedPlantPrice] = useState(null);

  //defines an asynchronous function updatePlantPrice that sends a PATCH request to update the price of the plant
  const updatePlantPrice = async () => {
    try {
      const response = await fetch(`http://localhost:6001/plants/${plant.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ price: newPrice })
      });
      if (!response.ok) {
        throw new Error('Failed to update plant price');
      }
      //updates the updatedPlantPrice state variable with the new price input by user. 
      //parseFloat takes newPrice number and uses .toFixed(2) to round it to 2 decimal places. 
      setUpdatedPlantPrice(parseFloat(newPrice).toFixed(2));
      //clears the input field after price is updated
      setNewPrice('');
    } catch (error) {
      console.error('Error updating plant price:', error);
    }
  };
  //updates the newPrice state variable with setNewPrice
  const handleInputChange = (e) => {
    setNewPrice(e.target.value);
  };
  //calls the updatePlantPrice function 
  const handleUpdatePrice = () => {
    updatePlantPrice();
  };
//creates a state variable soldOut and sets its initial value to true
//const handleClick toggles the soldOut variable state between true and false
  const [soldOut, setSoldOut] = useState(true)
  const handleClick = () => {
    setSoldOut(prev => !prev)
  }
  //when called, sends a DELETE request to the server to delete the plant with the given id
  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:6001/plants/${plant.id}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error('Failed to delete plant');
      }
      deletePlant(plant.id);
    } catch (error) {
      console.error('Error deleting plant:', error);
    }
  };
  //returns JSX which includes the plant card image, name, and price.
  //ternary operator in Price tag checks that the updatedPlantPrice is not null, meaning that a new price has been
  //input and updated, and so displays the updated price
  //if updatedPlantPrice is null it means the price hasn't been updated, so it displays the original price
  //added a button to toggle between "In Stock" and "Out of Stock"
  //onChange={handleInputChange} means handleInputChange is called when value of input for newPrice is updated
  //added an Update Price button that calls handleUpdatePrice
  //added a Delete button that calls handleDelete
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {updatedPlantPrice !== null ? updatedPlantPrice : plant.price}</p>
      {soldOut ? (
        <button onClick={handleClick} className="primary">In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
      <input
        type="number"
        value={newPrice}
        onChange={handleInputChange}
        placeholder="New Price"
      />

      <button onClick={handleUpdatePrice}>Update Price</button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default PlantCard;