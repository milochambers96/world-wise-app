import React, { useState, useEffect } from "react";

function SubregionRadio({ geographicFilter, setGeographicFilter }) {
  const [subRegionFilterArray, setSubRegionFilterArray] = useState([]);
  const [radioOption, setRadioOption] = useState("");

  useEffect(() => {
    if (geographicFilter === "Africa") {
      const africa = ["Northern Africa", "Sub-Saharan Africa"];
      setSubRegionFilterArray(africa);
    } else if (geographicFilter === "Americas") {
      const americas = ["Latin America and the Caribbean", "Northern America"];
      setSubRegionFilterArray(americas);
    } else if (geographicFilter === "Asia") {
      const asia = [
        "Central Asia",
        "Eastern Asia",
        "South-eastern Asia",
        "Southern Asia",
        "Western Asia",
      ];
      setSubRegionFilterArray(asia);
    } else if (geographicFilter === "Europe") {
      const europe = [
        "Eastern Europe",
        "Northern Europe",
        "Southern Europe",
        "Western Europe",
      ];
      setSubRegionFilterArray(europe);
    } else if (geographicFilter === "Oceania") {
      const oceania = [
        "Australia and New Zealand",
        "Melanesia",
        "Micronesia",
        "Polynesia",
      ];
      setSubRegionFilterArray(oceania);
    }
  }, [geographicFilter]);

  console.log(subRegionFilterArray);

  function handleRadioChange(e) {
    const selectedSubregion = e.target.value;
    setRadioOption(selectedSubregion);
    setGeographicFilter(selectedSubregion);
  }

  return (
    <div id="radio-container">
      {subRegionFilterArray.map((region, index) => (
        <div key={index}>
          <input
            className="radio has-text-danger"
            type="radio"
            id={region}
            name="subregionRadio"
            value={region}
            checked={radioOption === region}
            onChange={handleRadioChange}
          />
          <label htmlFor={region}>{region}</label>
        </div>
      ))}
    </div>
  );
}
export default SubregionRadio;
