import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {

  const { searchValue, setSearchValue } = useGlobalContext();

  const handleSearch = (e) => {
    e.preventDefault();
    if(searchValue == false) return;
    setSearchValue(e.target.search.value);
  }

  return (
    <section>
      <h1 className="title">Image Search</h1>
      <form className="search-form" onSubmit={handleSearch}>
      <input
        type="text"
        className="form-input search-input"
        name="search"
        placeholder="cat"
      />
      <button type="submit" className="btn">
        search
      </button>
    </form>
    </section>
    
  );
};

export default SearchForm;
