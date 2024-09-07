function FullCountryBio({ country }) {
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
    <>
      <div className="is-flex is-justify-content-center">
        <div className="country-bio has-background-warning-dark">
          <h5>{country.name.official}</h5>
          <div className="flag-container">
            <img
              className="flag"
              src={country.flags.png}
              alt={country.flags.alt}
            />
          </div>
          <p>
            <strong>Continent:</strong> {country.continents[0]}
          </p>
          <p>
            <strong>Capital(s):</strong> {capitals}
          </p>
          <p>
            <strong>Population:</strong> {country.population.toLocaleString()}
          </p>
          <p>
            <strong>Area:</strong> {country.area.toLocaleString()} km²
          </p>
          <p>
            <strong>Currency:</strong> {currencyName}
          </p>
          <p>
            <strong>Official Language(s):</strong> {languages}
          </p>
          <div className="coa-container">
            <img className="coat-of-arms" src={country.coatOfArms.png} />
          </div>
        </div>
      </div>
    </>
  );
}

export default FullCountryBio;
