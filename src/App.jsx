import React, { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from './compontes/header/Header';
import Filteration from './compontes/Filteration/Filteration';
import CountreCard from './compontes/countreCard/CountreCard';
import CountreWrapper from './compontes/countreCard/CountreWrapper';
import InfoCountry from './compontes/infoCountry/InfoCountry';
import TheamSwitch from './compontes/header/components/Theam-switch';

function App() {
  const [region, setRegion] = useState("");
  const [searchItem, setSearchItem] = useState("");
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errMsg, setErrMsg] = useState("");


  const [mood, setMood] = useState(localStorage.getItem("theme")||"light");

  const base_url = "https://restcountries.com/v3.1/";

  const fetchCountries = async () => {
    let url = "";
    let data = [];
    setLoading(true);
    try {
      if (searchItem) {
        url = `${base_url}name/${searchItem}`;
        const response = await fetch(url);
        if (!response.ok) throw new Error("No Country Found");
        data = await response.json();
        if (region) {
          data = data.filter((country) => country.region === region);
        }
      } else if (region) {
        url = `${base_url}region/${region}`;
        const response = await fetch(url);
        data = await response.json();
      } else {
        url = `${base_url}all?fields=name,population,region,capital,flags`;
        const response = await fetch(url);
        data = await response.json();
      }

      setCountries(data);
      setErrMsg("");
    } catch (error) {
      setErrMsg(error.message || "Something went wrong");
      setCountries([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, [region, searchItem]);

  return (
    <>
      <div className={` transition-colors duration-600 ease-linear ${mood === "dark" ? "dark bg-gray-900 text-white min-h-screen" : "bg-white text-black min-h-screen"}`}>
        <div className="container mx-auto p-4">
          <Header mood={mood} setMood={setMood} />
          <div className="mt-8">
            <Filteration
              searchItem={searchItem}
              onSearchChange={setSearchItem}
              onRegionChange={setRegion}
              region={region}
            />

            {loading && (
              <h1 className="flex justify-center items-center font-bold text-[50px] my-10">
                Loading...
              </h1>
            )}

            {!loading && !errMsg && countries.length !== 0 && (
              <CountreWrapper>
                {countries.map((country, index) => (
                  <CountreCard key={index} countre={country} />
                ))}
              </CountreWrapper>
            )}

            {!loading && (errMsg || countries.length === 0) && (
              <h1 className="flex justify-center items-center font-bold">
                {errMsg || "No Country Found"}
              </h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/infoCountry", element: <InfoCountry /> },
]);

export default function Main() {
  return <RouterProvider router={router} />;
}
