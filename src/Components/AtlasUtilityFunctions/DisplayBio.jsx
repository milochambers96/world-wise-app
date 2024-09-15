function DisplayBio({
  official,
  continent,
  capital,
  pop,
  size,
  currency,
  lang,
}) {
  // function handleClick() {
  //   return favourite
  // }

  return (
    <div className="country-bio">
      <h4 className="is-size-5 has-text-centered mb-1 has-text-weight-semibold">
        {official}
      </h4>
      <p>
        <strong>Continent:</strong> {continent}
      </p>
      <p>
        <strong>Capital(s):</strong> {capital}
      </p>
      <p>
        <strong>Population:</strong> {pop.toLocaleString()}
      </p>
      <p>
        <strong>Area:</strong> {size.toLocaleString()} km²
      </p>
      <p>
        <strong>Currency:</strong> {currency}
      </p>
      <p>
        <strong>Official Language(s):</strong> {lang}
      </p>
      <button className="button mt-3">Add to visited</button>
    </div>
  );
}

export default DisplayBio;
