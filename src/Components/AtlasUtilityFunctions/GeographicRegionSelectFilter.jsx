import React, { useState, useEffect } from "react";
import SubregionRadio from "./SubregionRadio";

function GeographicRegionSelectFilter({
  setCountries,
  setHasRegionFilterBeenSelected,
}) {
  const [geographicFilter, setGeographicFilter] = useState("");

  function handleChange(e) {
    const selectedGeographicRegion = e.target.options[e.target.selectedIndex];
    const selectedText = selectedGeographicRegion.innerHTML;
    // console.log("the user selected", selectedText);
    setGeographicFilter(selectedText);
  }

  useEffect(() => {
    if (geographicFilter) {
      fetchFilteredCountries();
    }
  }, [geographicFilter]);

  async function fetchFilteredCountries() {
    try {
      if (geographicFilter === "All") {
        const allResp = await fetch("https://restcountries.com/v3.1/all");
        const allCountires = await allResp.json();
        setCountries(allCountires);
      } else {
        const resp = await fetch(
          `https://restcountries.com/v3.1/region/${geographicFilter}`
        );
        const filteredGeography = await resp.json();
        setCountries(filteredGeography);
      }
    } catch (error) {
      console.error("Error fetching geographic data:", error);
    }
  }

  return (
    <>
      <div id="atlas-filter">
        <section className="select is-warning mb-4">
          <select onChange={handleChange} name="geographic-filter">
            <option defaultValue disabled>
              Filter by Geographic Region
            </option>
            <option>All</option>
            <option>Africa</option>
            <option>Americas</option>
            <option>Asia</option>
            <option>Europe</option>
            <option>Oceania</option>
          </select>
        </section>
        <section>
          <SubregionRadio
            geographicFilter={geographicFilter}
            setGeographicFilter={setGeographicFilter}
            handleSelectChange={handleChange}
          />
        </section>
      </div>
    </>
  );
}

export default GeographicRegionSelectFilter;
