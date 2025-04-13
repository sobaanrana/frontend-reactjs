import React from "react";
import { NavLink } from "react-router-dom";

export default function CountryCardBig({ country }) {
  // const { id } = country;
  return (
    <NavLink to={`/country/${country.name.common}`}>
      <div>{country.name.common}</div>
    </NavLink>
  );
}
