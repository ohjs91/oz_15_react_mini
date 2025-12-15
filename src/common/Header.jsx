import React, { useEffect, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';
import useAuthStore from '@/store/useAuthFetch';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const { user, isLogin, fetchLogoutUser } = useAuthStore();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  // 다크모드 토글
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
            <div className="relative group">
              <button
                className="flex items-center"
                onClick={() => setOpen((prev) => !prev)}
              >
                <FaUserCircle className="text-white w-8 h-8 cursor-pointer" />
              </button>
              {open && (
                <div
                  className="absolute right-0 mt-3 w-40 bg-white dark:bg-gray-800 
                rounded-xl shadow-lg transition-all duration-300 z-99"
                >
                  <div className="p-3 border-b border-gray-200 dark:border-gray-700">
                    <span className="text-gray-800 dark:text-gray-200 text-sm font-semibold">
                      {user?.user_metadata?.user_name} 님
                    </span>
                  </div>

                  <ul className="flex flex-col text-sm text-gray-700 dark:text-gray-200">
                    <li>
                      <Link
                        to="/mypage"
                        onClick={() => setOpen(false)}
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        마이페이지
                      </Link>
                    </li>

                    <li>
                      <button
                        onClick={() => fetchLogoutUser(navigate)}
                        className="cursor-pointer w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-b-xl"
                      >
                        로그아웃
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
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
