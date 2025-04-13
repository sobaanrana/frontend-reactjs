import React, { useState } from "react";

export default function SearchFilter({ countryData, setFilteredCountryData }) {
  const [value, setValue] = useState();

  const handleSearch = (e) => {
    console.log(e.target.value);
    setValue((value) => e.target.value);

    const filterData = countryData?.filter((country) =>
      country.name.common.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredCountryData(filterData);
  };

  return (
    <input
      type="text"
      placeholder="Search for a country..."
      className="SearchFilter"
      onChange={handleSearch}
      value={value}
      name="search"
    />
  );
}
