import React, { useState } from 'react'
import{IoMdSearch} from "react-icons/io"
import { regions } from '../../assets/data'
export default function Filteration({onRegionChange ,region,onSearchChange,searchItem}) {
        
  return (
    <div className=' sm:flex sm:justify-between sm:items-center'>
        
        {/* search */}
        <label htmlFor="search "  className='flex items-center bg-element dark:bg-slate-600 dark:text-white p-3 shadow gap-2 rounded-3xl sm:w-[30%]'>
            <IoMdSearch />
            <input type="text" id="search" name='search' placeholder='Search For countre..' className='border-none outline-none dark:placeholder:text-white placeholder:text-slate-700' onChange={(e)=>onSearchChange(e.target.value)} value={searchItem} />

        </label>
        <div className="sm:w-[30%] my-3">

        <select name="region" className='bg-element shadow p-3 w-full  dark:bg-slate-600 dark:text-white border-none outline-none rounded-t-2xl' value={region} onChange={(e) => onRegionChange(e.target.value)} >
            <option value="" hidden className='text-slate-700'>Filter By Region</option>
            {regions.map(function(region,index){
                return <option   key={index} value={region.name}> {region.name}  </option>
            })}

        </select>
        </div>
        
    </div>
  )
}
