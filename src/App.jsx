import React, { useEffect, useState } from "react";
import "./App.css";
import Atlas from "./Components/Atlas";
import Quiz from "./Components/Quiz";

const App = () => {
  const [countries, setCountries] = React.useState([]);
  const [quiz, setQuiz] = React.useState(false);

  React.useEffect(() => {
    fetchCountries();
  }, []);

  async function fetchCountries() {
    const resp = await fetch("https://restcountries.com/v3.1/all");
    const countryData = await resp.json();
    setCountries(countryData);
  }

  return (
    <div className="content">
      <h1>World Wise</h1>
      <h3>A Passport to Global Knowledge.</h3>
      {!quiz ? <Atlas quiz={quiz} countries={countries} /> : <Quiz />}
    </div>
  );
};

export default App;
