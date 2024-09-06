import React, { useState } from "react";
import DisplayCountries from "./AtlasUtilityFunctions/DisplayCountries";

function Atlas({ countries, quiz }) {
  const [search, setSearch] = React.useState("");

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  const filteredCountries = countries.filter((country) => {
    return (
      country.name.official.toLowerCase().includes(search.toLowerCase()) ||
      country.name.common.toLowerCase().includes(search.toLowerCase()) ||
      country.continents[0].toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <>
      <section id="atlas-container">
        {!quiz ? (
          <input
            id="search-bar"
            type="search"
            placeholder="Search by country or continent..."
            name="search"
            value={search}
            onChange={handleSearch}
          ></input>
        ) : (
          <p> </p>
        )}
        (
        <div id="countries-container">
          {(search.length > 0 ? filteredCountries : countries).map(
            (country) => {
              const currencyCode = country.currencies
                ? Object.keys(country.currencies)[0]
                : null;
              const currencyName = currencyCode
                ? country.currencies[currencyCode].name
                : "N/A";

              const capitals = country.capital
                ? Object.values(country.capital).join(", ")
                : "N/A";
              const languages = country.languages
                ? Object.values(country.languages).join(", ")
                : "N/A";

              return (
                <DisplayCountries
                  key={country.cca3}
                  name={country.name.common}
                  official={country.name.official}
                  flag={country.flags.png}
                  continent={country.continents[0]}
                  capital={capitals}
                  pop={country.population}
                  size={country.area}
                  currency={currencyName}
                  lang={languages}
                />
              );
            }
          )}
        </div>
        )
      </section>
    </>
  );
}

export default Atlas;
