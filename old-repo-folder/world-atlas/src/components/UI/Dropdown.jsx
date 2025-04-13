import React from "react";

export default function Dropdown({
  filteredCountryData,
  setFilteredCountryData,
}) {
  const handleSelectChange = (event) => {
    const filterData = filteredCountryData?.filter(
      (country) => country.region === event.target.value
    );

    setFilteredCountryData(filterData);
  };
  return (
    <select
      name="region"
      id="region"
      className="Dropdown"
      defaultValue="Filter by Region"
      onChange={handleSelectChange}
    >
      <option value="Asia">Asia</option>
      <option value="Americas">Americas</option>
      <option value="Africa">Africa</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
      <option value="Antarctic">Antarctic</option>
    </select>
  );
}
