import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';
import { useAuth } from '@/context/index';
const Header = () => {
  const { user, isLogin, logout } = useAuth();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode((dark) => !dark);
  };

  // 로컬스토리지 다크모드
  useEffect(() => {
    const isDark = localStorage.getItem('darkMode');
    if (isDark === 'true') {
      setIsDarkMode(true);
    } else if (isDark === 'false') {
      setIsDarkMode(false);
    }
  }, []);

  // 다크모드 감지
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
          <Link to={'/search'} className="text-white text-3xl cursor-pointer">
            <BiSearch />
          </Link>
          <button
            className="text-white text-3xl cursor-pointer p-1"
            onClick={toggleDarkMode}
          >
            {isDarkMode ? <IoSunnyOutline /> : <IoMoonOutline />}
          </button>
          {isLogin ? (
            <>
              <span className="text-white text-sm sm:text-base">
                {user?.user_metadata.user_name} 님
              </span>
              <button
                type="button"
                className="puple_btn cursor-pointer"
                onClick={logout}
              >
                로그아웃
              </button>
            </>
          ) : (
            <>
              <Link className="puple_btn" to={'/login'}>
                로그인
              </Link>
              <Link className="puple_btn" to={'/signup'}>
                회원가입
              </Link>
            </>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
