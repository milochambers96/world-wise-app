import React, { useState, useEffect } from "react";
import DisplayCountries from "./AtlasUtilityFunctions/DisplayCountries";
import GeographicRegionSelectFilter from "./AtlasUtilityFunctions/GeographicRegionSelectFilter";

function Atlas() {
  const [countries, setCountries] = useState([]);
  const [hasRegionFilterBeenSelected, setHasRegionFilterBeenSelected] =
    useState(false);

  React.useEffect(() => {
    fetchCountries();
  }, []);

  async function fetchCountries() {
    const resp = await fetch("https://restcountries.com/v3.1/all");
    const countryData = await resp.json();
    setCountries(countryData);
  }

  return (
    <>
      <h1 className="is-size-1 has-text-centered has-text-black-ter has-text-weight-bold">
        World Wise
      </h1>
      <h3 className="is-size-4 has-text-centered has-text-black-ter has-text-weight-semibold mb-3">
        Your global atlas.
      </h3>
      <GeographicRegionSelectFilter
        setCountries={setCountries}
        setHasRegionFilterBeenSelected={setHasRegionFilterBeenSelected}
      />
      <section id="atlas-container" className="mt-6">
        <div id="countries-container">
          {/* {(search.length > 0 ? filteredCountries : countries).map( */}
          {countries.map((country) => {
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
          })}
        </div>
      </section>
    </>
  );
}

export default Atlas;
