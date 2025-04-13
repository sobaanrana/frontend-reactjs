import React from "react";

import countryData from "../../api/countryData.json"; // Import JSON file

export default function () {
  return (
    <div className="card-container">
      {countryData?.map((countryItem) => {
        const { id, countryName, capital, population, interestingFact } =
          countryItem;
        return (
          <div className="card" key={id}>
            <p className="country-name">Country: {countryName}</p>
            <p className="country-capital">Capital: {capital}</p>
            <p className="country-population">Population: {population}</p>
            <p className="country-fact">InterestingFact: {interestingFact}</p>
          </div>
        );
      })}
    </div>
  );
}
