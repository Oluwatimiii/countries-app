import React, { useEffect, useState } from "react";
import Countries from "./Countries";


function Home() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);  

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = async () => {
    setIsLoading(true);
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
    await setCountries(data);
    setIsLoading(false);
  };

  const searchCountry = async (term) => {
    if (term.length < 3 || term === "") return;
    setIsLoading(true);
    const res = await fetch(`https://restcountries.com/v3.1/name/${term}`);
    const data = await res.json();
    await setCountries(data);
    setIsLoading(false);
  };

  const countryRegion = async (region) => {
    if (region === "") return;
    setIsLoading(true);
    const res = await fetch(`https://restcountries.com/v3.1/region/${region}`);
    const data = await res.json();
    await setCountries(data);
    setIsLoading(false);
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-800 dark:text-white overflow-hidden">
      <div className="md:flex md:items-center md:justify-between container mx-auto mb-10 md:mb-14 pt-[6rem] px-4 md:px-8">
        <div className="flex items-center bg-white py-2 px-3 md:px-4 rounded md:w-1/3 shadow-md dark:text-gray-800">
          <i className="fa fa-search dark:text-gray-800"></i>
          <input
            type="text"
            placeholder="Search for a country"
            className="bg-transparent pl-3 md:pl-4 focus:outline-none"
            onChange={(term) => searchCountry(term.target.value)}
          />
        </div>

        <div className="mt-8 md:mt-0">
          <select
            className="p-2 shadow-md rounded font-semibold dark:bg-gray-700 focus:outline-none"
            onChange={(sel) => countryRegion(sel.target.value)}
          >
            <option value="">Filter by Region</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>
      </div>

      <Countries countries={countries} isLoading={isLoading} />
    </div>
  );
}

export default Home;
