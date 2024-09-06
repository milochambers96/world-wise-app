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
      className="country-card"
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
        <>
          <h4>{name}</h4>
          <div className="flag-container">
            <img className="flag" src={flag} alt={`Flag of ${name}`} />
            fu
          </div>
          <p>
            <strong>Continent:</strong> {continent}
          </p>
          <p>
            <strong>Capital:</strong> {capital}
          </p>
        </>
      )}
    </div>
  );
}

export default DisplayCountries;
