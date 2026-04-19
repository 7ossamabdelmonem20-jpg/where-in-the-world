import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function TheamSwitch({ mood, setMood }) {
  function changeMode() {
    // setMood(mood === 'dark' ? 'light' : 'dark');
    if(mood=="light"){
      setMood("dark");
      localStorage.setItem("theme","dark");
    }else{
      setMood("light");
      localStorage.setItem("theme","light");
    }
  }

  return (
    <div
      onClick={changeMode}
      role="button"
      className="flex items-center gap-2 cursor-pointer border p-2 rounded-lg hover:opacity-80 transition"
    >
      {mood === 'dark' ? <FaSun size={18} /> : <FaMoon size={18} />}
      <span>{mood === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
    </div>
  );
}
