import React, { useEffect, useState } from 'react';
import MovieCard from '@/components/MovieCard';
import useSearch from '@/hooks/useSearch';
import { BiSearch } from 'react-icons/bi';
const SearchLayer = ({ setSearchOpen }) => {
  const [keyword, setKeyword] = useState('');
  const { data, loading, error } = useSearch({ keyword });
  const filterData = data?.results?.filter((el) => el.adult === false) || [];

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  return (
    <div className="Searh_results fixed top-0 w-full h-screen p-12 bg-black z-9999">
      <div className="relative w-full max-w-3xl mx-auto mb-10">
        <BiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-2xl" />

        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="검색어를 입력해주세요"
          autoFocus
          className="w-full pl-14 pr-5 py-4 text-lg text-black bg-white rounded-2xl shadow-md outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
      </div>
      <div className="grid grid-cols-6 gap-12 overflow-y-auto h-full hide-scrollbar">
        {filterData.map((el, index) => (
          <MovieCard key={el.id} data={el} no={index + 1} />
        ))}
      </div>
      <button
        className="absolute top-12 right-12 text-4xl text-white cursor-pointer"
        onClick={() => setSearchOpen(false)}
      >
        ✕
      </button>
    </div>
  );
};

export default SearchLayer;
