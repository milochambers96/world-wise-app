import React, { useEffect, useState } from 'react'
import './App.css'
import DisplayCountries from './Components/DisplayCountries';

const App = () => {

  const [countries, setCountries] = React.useState([]);
  const [search, setSearch] = React.useState('');

  async function fetchCountries() {
    const resp = await fetch("https://restcountries.com/v3.1/all");
    const countryData = await resp.json();
    setCountries(countryData);
  }

  React.useEffect(() => {
    fetchCountries();
  }, [])
  // console.log(countries)

  function handleSearch(e) {
    setSearch(e.target.value)
  }

  const filteredCountries = countries && countries.filter((country) => {
    return country.name.official.toLowerCase().includes(search.toLowerCase()) || 
    country.name.common.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <div>
      <h1>World Wise</h1>
      <h4>Your Passport to Global Knowledge.</h4>
      <input id="search-bar" type="search" placeholder="Search by country..." name="search" value={search} onChange={handleSearch}>
      </input>
      <br />
      <br />
      <div id="countries-container">
        {countries ? countries.map((country, index) => {
          return <DisplayCountries 
          key = {country.cca3} 
          name = {country.name.common}
          flag = {country.flags.png}
          capital = {country.capital}
          />
         }) : <p>Spinning the globe 🌍</p>}
      
      </div>
    </div>
  );
}

export default App

