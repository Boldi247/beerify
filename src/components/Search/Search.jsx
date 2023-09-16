import React, { useEffect, useRef, useState } from "react";
import css from "./Search.module.css";

import { BiSearchAlt } from "react-icons/bi";

const Search = (props) => {
  const inputRef = useRef();

  const handleSearchSubmitWithEnter = (event) => {
    if (event.key !== "Enter") return;
    setQuery();
  };

  const setQuery = () => {
    const query = inputRef.current.value;
    props.filterBeers(query);
  };

  const checkIfEmpty = () => {
    if (inputRef.current.value === "") {
      props.filterBeers("");
    }
  };

  return (
    <div className={css.searchbar}>
      <input
        onKeyDown={handleSearchSubmitWithEnter}
        onChange={checkIfEmpty}
        ref={inputRef}
        type="text"
        placeholder="Type here..."
      />
      <BiSearchAlt className={css.icon} onClick={setQuery} />
    </div>
  );
};

export default Search;
