import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function InfoCountry() {
  const location = useLocation();
  const navigate = useNavigate();
  const { country } = location.state || {};

  const handleBack = () => {
    navigate('/'); 
  };
  const [mood, setMood] = useState('light');

  useEffect(() => {
    const savedMood = localStorage.getItem('theme');
    if (savedMood) setMood(savedMood);
  }, []);

  return (
     <div
      className={`min-h-screen p-8   ${
        mood === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'
      }`}
    >
      
      <button
        onClick={handleBack}
        className="bg-blue-600 cursor-pointer text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-200 mb-6"
      >
        ← Back
      </button>
      {/* ${
        mood === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'
      } */}
    {/* mood === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black' */}
      {country ? (
        <div className={`p-8  border-2 ${
        mood === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'
      } flex flex-col md:flex-row md:items-center md:space-x-10 `}>
          <div className=" w-1/2 flex  flex-col items-center md:items-start ">
            <h1 className="text-3xl font-bold mb-4">{country.name.common}</h1>
          <img
            src={country.flags.png || country.flags.svg}
            alt={country.name.common}
            className="w-60 rounded-lg mb-6 dark:bg-slate-700 dark:text-white"
          />
          </div>
          <div className="dark:bg-slate-700 dark:text-white">
            <p className='my-5 dark:bg-slate-700 dark:text-white '><strong>Population:</strong> {country.population}</p>
          <p className='my-5 dark:bg-slate-700 dark:text-white'><strong>Region:</strong> {country.region}</p>
          <p className='my-5 dark:bg-slate-700 dark:text-white'><strong>Capital:</strong> {country.capital}</p>
          </div>
        </div>
      ) : (
        <h2 className="text-xl text-center text-gray-600 mt-10">
          No country data found
        </h2>
      )}
    </div>
  );
}
