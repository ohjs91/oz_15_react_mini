import React from 'react';
import { Link } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
const Header = ({ setSearchOpen }) => {
  return (
    <>
      <header className="h-24 px-8 flex-between bg-black fixed w-full z-99">
        <h1>
          <Link className="text-4xl font-bold text-white" to={'/'}>
            OZ무비
          </Link>
        </h1>

        <div className="user_area flex gap-6">
          <button
            className="text-white text-3xl cursor-pointer"
            onClick={() => setSearchOpen(true)}
          >
            <BiSearch />
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
