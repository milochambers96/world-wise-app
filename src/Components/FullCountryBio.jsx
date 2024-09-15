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
        <div className="country-bio">
          <h5 className="is-size-4 has-text-centered has-text-black-ter has-text-weight-semibold mb-2">
            {country.name.official}
          </h5>
          <div className="flag-container mb-2">
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
          <div className="coa-container mb-2">
            <img className="coat-of-arms" src={country.coatOfArms.png} />
          </div>
          <p className="is-size-6 is-italic mt-2 mb-3">
            {country.name.common}'s coat of arms
          </p>
          <button className="button">Add to visited</button>
        </div>
      </div>
    </>
  );
}

export default FullCountryBio;
