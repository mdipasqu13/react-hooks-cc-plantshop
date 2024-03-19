import React, { useState } from "react";

function Search(updateSearch, updateSort) {

  const initialForm = {
    search: '',
    sort: "true"
  }

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
