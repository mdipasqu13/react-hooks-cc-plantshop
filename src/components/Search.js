import React, { useState } from "react";
import PlantList from "./PlantList";

function Search(updateSearch, updateSort) {

  const initialForm = {
    search: '',
    sort: "true"
  }
  // const searchBar = () => {}
  // const  [searchInput, setSearchInput] = useState("")

  // const handleChange = (e) => {
  //   e.preventDefault();
  //   setSearchInput(e.target.value);
  // };
  // if (searchInput.length > 0) {
  //   plants.filter((plants) => {
  //     return plants.name.match(searchInput)
  //   });

  // }

  const [form, setForm] = useState(initialForm)

  function handleSubmit(e) {
    e.preventDefault();
    updateSearch(form.search)
    updateSort(form.sort)
    setForm(initialForm)
  }

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="searchbar" onSubmit={handleChange}>
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        name="search"
        value={form.search}
        placeholder="Type a name to search..."
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}

export default Search;
