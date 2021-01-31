import React from "react";

const Search = (props) => {
  return (
    <form className="center-align container">
      <div className="input-field">
        <label htmlFor="search"></label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="validate"
          placeholder="Search For a User"
          id="search"
        />
      </div>
    </form>
  );
}


export default Search;