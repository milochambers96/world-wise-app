import DisplayBio from "./DisplayBio";
import React from "react";

function DisplayCountries({
  name,
  official,
  flag,
  continent,
  capital,
  pop,
  size,
  currency,
  lang,
}) {
  const [showBio, setBioStatus] = React.useState(false);

  function handleMouseEnter() {
    setBioStatus(true);
  }
  function handleMouseOut() {
    setBioStatus(false);
  }

  return (
    <div
      className="country-card-wrapper"
      onMouseOver={handleMouseEnter}
      onMouseOut={handleMouseOut}
    >
      {showBio ? (
        <DisplayBio
          official={official}
          continent={continent}
          capital={capital}
          pop={pop}
          size={size}
          currency={currency}
          lang={lang}
        />
      ) : (
        <div className="country-card">
          <h4 className="is-size-5 has-text-centered has-text-black-ter has-text-weight-semibold mb-1">
            {name}
          </h4>
          <div className="flag-container mb-1">
            <img className="flag" src={flag} alt={`Flag of ${name}`} />
          </div>
          <p>
            <strong>Continent:</strong> {continent}
          </p>
          <p>
            <strong>Capital:</strong> {capital}
          </p>
        </div>
      )}
    </div>
  );
}

export default DisplayCountries;
