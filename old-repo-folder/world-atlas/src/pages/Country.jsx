import React, { use, useEffect, useState, useTransition } from "react";
import { getCountyyData } from "../api/postApi";
import CountryCard from "../components/UI/CountryCard";
import CountryCardBig from "../components/UI/CountryCardBig";
import SearchFilter from "../components/UI/SearchFilter";
import Dropdown from "../components/UI/Dropdown";

export default function Country() {
  const [isPending, startTransition] = useTransition();
  const [countryData, setCountryData] = useState();

  const [filteredCountryData, setFilteredCountryData] = useState();

  // useEffect(() => {
  //   const res = getCountyyData();
  //   console.log(res);
  // }, []);

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountyyData();
      console.log(res);
      setCountryData(res.data);
    });
  }, []);

  console.log("countryData is", countryData);
  console.log("filteredCountryData is", filteredCountryData);

  if (isPending) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <SearchFilter
        countryData={countryData}
        setFilteredCountryData={setFilteredCountryData}
      />
      <Dropdown
        filteredCountryData={filteredCountryData}
        setFilteredCountryData={setFilteredCountryData}
      />
      {filteredCountryData
        ? filteredCountryData?.map((countryData) => (
            <CountryCardBig country={countryData} />
          ))
        : countryData?.map((countryData) => (
            <CountryCardBig country={countryData} />
          ))}
    </div>
  );
}
