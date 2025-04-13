import axios from "axios";

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

// HTTP GET METHOD
export const getCountyyData = () => {
  return api.get("/all?fields=name,population,region,capital,flags");
};

// HTTP GET METHOD for the individual country name
export const getCountyyIndData = (name) => {
  return api.get(
    `/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`
  );
};
