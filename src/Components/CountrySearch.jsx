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

  async function fetchSearchedCountry() {
    try {
      const resp = await fetch(
        `https://restcountries.com/v3.1/name/${userSearch}?fullText=true`
      );
      const searchedData = await resp.json();
      setSearchedCountry(searchedData);
    } catch (error) {
      console.error("Error fetching country data:", error);
    }
  }

  function submitUserSearch(e) {
    e.preventDefault();
    fetchSearchedCountry();
  }

  return (
    <>
      <h1 className="is-size-1 has-text-centered has-text-black-ter">
        World Wise
      </h1>
      <h3 className="is-size-3 has-text-centered has-text-black-ter">
        A passport to global knowledge.
      </h3>
      <p className="is-size-6 has-text-centered has-text-black-ter">
        Search for a country below, or head over to our{" "}
        <strong>
          <Link to="/atlas">Atlas</Link>
        </strong>{" "}
        to discover a world of fascinating destinations.
      </p>
      <form
        onSubmit={submitUserSearch}
        className="is-flex is-justify-content-center"
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
