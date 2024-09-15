import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FullCountryBio from "./FullCountryBio";

function CountrySearch({ countries }) {
  const [searchedCountry, setSearchedCountry] = useState(null);
  const [userSearch, setUserSearch] = useState("");

  function handleChange(e) {
    setUserSearch(e.target.value);
    console.log("the user input", userSearch);
  }

  function submitUserSearch(e) {
    e.preventDefault();
    fetchSearchedCountry();
  }

  async function fetchSearchedCountry() {
    try {
      const resp = await fetch(
        `https://restcountries.com/v3.1/name/${userSearch}?fullText=true`
      );
      const searchedData = await resp.json();
      setSearchedCountry(searchedData);
      console.log("The searched country is", searchedCountry);
    } catch (error) {
      console.error("Error fetching country data:", error);
    }
  }

  return (
    <>
      <h1 className="is-size-1 has-text-centered has-text-black-ter has-text-weight-bold">
        World Wise
      </h1>
      <h3 className="is-size-3 has-text-centered has-text-black-ter has-text-weight-semibold">
        A passport to global knowledge.
      </h3>
      <p className="is-size-6 has-text-centered has-text-black-ter has-text-weight-semibold mb-3">
        Search for a country below, or head over to our{" "}
        <span className="has-text-weight-bold is-italic has-text-danger">
          <Link to="/atlas">Atlas</Link>
        </span>{" "}
        to discover a world of fascinating destinations.
      </p>
      <form
        onSubmit={submitUserSearch}
        className="is-flex is-justify-content-center mb-3"
      >
        <div id="seach-bar" className="field has-addons">
          <div className="control">
            <input
              className="input is-warning is-rounded "
              type="search"
              placeholder="Ready to spin the globe?"
              name="search"
              value={userSearch}
              onChange={handleChange}
              style={{ width: "250px" }}
            />
          </div>
          <div className="control">
            <button className="button is-warning">Search</button>
          </div>
        </div>
      </form>
      {searchedCountry && searchedCountry.length > 0 ? (
        <FullCountryBio country={searchedCountry[0]} />
      ) : (
        <p> </p>
      )}
    </>
  );
}

export default CountrySearch;
