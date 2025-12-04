import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
const Header = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <header className="h-24 px-8 flex-between bg-black fixed w-full z-10">
      <h1>
        <Link className="text-4xl font-bold text-white" to={'/'}>
          OZ무비
        </Link>
      </h1>
      <div className="relative ">
        <BiSearch
          className={`absolute left-3 top-1/2 transform -translate-y-1/2 
                      text-gray-400 transition-all duration-300 ease-in-out
                      text-2xl`}
        />
        <input
          type="text"
          className={`pl-10 pr-4 py-2 rounded-full shadow-sm bg-white
            transition-all duration-300 ease-in-out
            ${
              isFocused
                ? 'w-180 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400'
                : 'w-60 border-0 bg-transparent focus:outline-none'
            }`}
          placeholder="검색어를 입력해주세요."
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </div>
      <div className="user_area flex gap-6">
        <button className="puple_btn" type="button">
          로그인
        </button>
        <button className="puple_btn" type="button">
          회원가입
        </button>
      </div>
    </header>
  );
};

export default Header;
