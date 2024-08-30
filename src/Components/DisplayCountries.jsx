function DisplayCountries({name, flag, capital}) {
    return <div className='country-card'>
            <h4>{name}</h4>
            <img className="flag" src={`${flag}`}></img>
            <br></br>
            <p><strong>Capital:</strong>{capital}</p>
          </div>
}

export default DisplayCountries