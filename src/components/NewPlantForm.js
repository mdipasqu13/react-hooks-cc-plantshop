import React, { useState } from "react";

//created a component called NewPlantForm which accepts the addPlant prop to create a new plant object
//initialForm defines the object structure of the new plant to be added, with all values set to blank

function NewPlantForm({ addPlant }) {

  const initialForm = { 
    name: "",
    image: "",
    price: ""
  }
  const [form, setForm] = useState(initialForm)
//handleChange updates the previous form state (...form) to the new value input by user
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  //sends a POST request to the server and adds the new plant 
  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:6001/plants", {
      method: 'POST',
      headers:{"Content-Type": "Application/JSON"},
      body: JSON.stringify(form)
    })
    .then(res => {
      if(res.ok){
        return res.json()
      } else {
        console.error('error')
      }
    })
    .then(data => {
      addPlant(data)
      setForm(initialForm)
    })
  }
//returns JSX with the input fields for a new plant's name, image and price.
//each value has a placeholder string which appears while input field is blank
//an Add Plant button is included, which when clicked calls the handleSubmit function from above
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" onChange={(e) => handleChange(e)} value={form.name} name="name" placeholder="Plant name" />
        <input type="text" onChange={(e) => handleChange(e)} value={form.image} name="image" placeholder="Image URL" />
        <input type="number" onChange={(e) => handleChange(e)} value={form.price} name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
