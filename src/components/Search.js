import React, { useState } from "react";

// function Search(updateSearch, updateSort) {
function Search({ updateSearch }) {

  // const initialForm = {
  //   search: '',
  // }

  // const [form, setForm] = useState(initialForm)

  const [form, setForm] = useState('')
  

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   updateSearch(form)
  //   // updateSort(form.sort)
  //   // setForm(initialForm)
  // }

  function handleChange(e) {
    const searchTerm = e.target.value;
    setForm(searchTerm)
    updateSearch(searchTerm)
  }

  
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        name="search"
        value={form}
        placeholder="Type a name to search..."
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
