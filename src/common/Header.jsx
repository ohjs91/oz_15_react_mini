import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode((dark) => !dark);
  };
  useEffect(() => {
    const isDark = localStorage.getItem('darkMode');
    if (isDark) setIsDarkMode(true);
  }, []);
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);
  return (
    <>
      <header className="h-24 px-4 sm:px-12 flex-between bg-black fixed w-full z-99">
        <h1>
          <Link className="text-2xl sm:text-4xl font-bold text-white" to={'/'}>
            OZ무비
          </Link>
        </h1>

        <div className="user_area flex-center gap-2">
          <Link
            to={'/search'}
            className="text-white text-3xl cursor-pointer"
            onClick={() => setSearchOpen(true)}
          >
            <BiSearch />
          </Link>
          <button
            className="text-white text-3xl cursor-pointer p-1"
            onClick={toggleDarkMode}
          >
            {isDarkMode ? <IoSunnyOutline /> : <IoMoonOutline />}
          </button>
          <button className="puple_btn" type="button">
            로그인
          </button>
          <button className="puple_btn" type="button">
            회원가입
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
