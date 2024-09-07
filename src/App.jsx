import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Atlas from "./Components/Atlas";
import Visited from "./Components/Visited";
import Quiz from "./Components/Quiz";
import CountrySearch from "./Components/CountrySearch";
const App = () => {
  const [countries, setCountries] = React.useState([]);
  const [isAtlasOpen, setIsAtlasOpen] = React.useState(false);
  const [isVisitedOpen, setIsVisitedOpen] = React.useState(false);
  const [hasQuizStarted, setHasQuizStarted] = React.useState(false);

  React.useEffect(() => {
    fetchCountries();
  }, []);

  async function fetchCountries() {
    const resp = await fetch("https://restcountries.com/v3.1/all");
    const countryData = await resp.json();
    setCountries(countryData);
  }

  if (!countries) {
    return <h1>Please wait as we spin the globe</h1>;
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<CountrySearch countries={countries} />} />
        <Route path="/atlas" element={<Atlas />} />
        <Route path="/visited" element={<Visited />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </Router>
  );
};

export default App;
