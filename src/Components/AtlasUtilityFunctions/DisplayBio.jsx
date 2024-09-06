function DisplayBio({official, continent, capital, pop, size, currency, lang}) {
    
    return (
        <div className="country-bio"> 
            <h5>{official}</h5>
            <p><strong>Continent:</strong> {continent}</p>
            <p><strong>Capital(s):</strong> {capital}</p>
            <p><strong>Population:</strong> {pop.toLocaleString()}</p>
            <p><strong>Area:</strong> {size.toLocaleString()} km²</p>
            <p><strong>Currency:</strong> {currency}</p>
            <p><strong>Official Language(s):</strong> {lang}</p>
        </div>
    )
}

export default DisplayBio