import React from 'react'

import TheamSwitch from './components/Theam-switch';


export default function Header({ mood, setMood }) {
  return (
    <header className='bg-element shadow-2xl py-5 dark:bg-slate-800 dark:text-white rounded-4xl'>
        <div className=' container capitalize flex justify-between items-center'>
            <h1 className='font-bold sm:text-2xl md:text-3xl'>where in the world</h1>
            <TheamSwitch mood={mood} setMood={setMood} />
        </div>
    </header>
  )
}
