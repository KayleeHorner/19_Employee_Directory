import React from "react";

function Search(props) {
  return (
    <form className="center-align container">
      <div className="input-field">
        <label htmlFor="search"></label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="validate"
          placeholder="Search For a User"
          id="search"
        />
        <br />
        <button onClick={props.handleFormSubmit} className="btn waves-light">
          Search
        </button>
      </div>
    </form>
  );
}


export default Search;
