import React from 'react'
import { useNavigate } from 'react-router-dom'
import InfoCountry from '../infoCountry/InfoCountry'

export default function CountreCard({ countre }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/infoCountry', { state: { country: countre } });
  };

  return (
    <div
      className='country-card bg-element dark:bg-slate-500 shadow-2xl rounded-2xl overflow-hidden cursor-pointer'
      onClick={handleClick}
    >
      <div className="img-wrapper h-[50%] sm:flex sm:justify-center sm:items-center overflow-hidden">
        <img
          src={countre.flags.png || countre.flags.svg}
          alt={countre.name.common}
          className='w-100 h-full hover:transition-all duration-300 hover:scale-125'
        />
      </div>
      <div className="content-wrapper p-3  ">
        <h2 className='mb-3 font-bold'>{countre.name.common}</h2>
        <div className="space-x-3 ">
          <span className='md:font-bold text-body dark:text-black'>Population:</span>
          <span className='text-slate-500 dark:text-slate-200'>{countre.population}</span>
        </div>
        <div className="space-x-3">
          <span className='md:font-bold text-body dark:text-black'>Region:</span>
          <span className='text-slate-500 dark:text-slate-200'>{countre.region}</span>
        </div>
        <div className="space-x-3">
          <span className='md:font-bold text-body dark:text-black'>Capital:</span>
          <span className='text-slate-500 dark:text-slate-200'>{countre.capital}</span>
        </div>
      </div>
    </div>
  );
}
