import React, { useCallback, useEffect, useMemo, useState } from 'react';
import MovieCard from '@/components/MovieCard';
import { BiSearch } from 'react-icons/bi';
import { Link, useSearchParams } from 'react-router-dom';
import Loading from '../components/Loading';
import { fetchSearchMovies } from '@/api/movieSearch';
import { useQuery } from '@tanstack/react-query';
const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const urlKeyword = searchParams.get('query') || '';
  const [keyword, setKeyword] = useState(urlKeyword);
  const [debouncedKeyword, setDebouncedKeyword] = useState(urlKeyword);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['movies', 'search', debouncedKeyword],
    queryFn: () => fetchSearchMovies(debouncedKeyword),
  });

  // 디바운스
  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };
  const debouncedSearch = useMemo(
    () =>
      debounce((query) => {
        setDebouncedKeyword(query);
      }, 300),
    [],
  );
  const handleChangeDebounced = useCallback(
    (event) => {
      setKeyword(event.target.value);
      debouncedSearch(event.target.value);
    },
    [debouncedSearch],
  );

  // 성인 필터
  const filterData = data?.results?.filter((el) => el.adult === false) || [];

  // keyword 파라미터 동기화
  useEffect(() => {
    setSearchParams({ query: keyword });
  }, [keyword]);
  return (
    <div className="Searh_results fixed top-0 w-full h-screen p-12 bg-white dark:bg-gray-800 z-9999">
      <div className="relative w-full max-w-3xl mx-auto mb-6">
        <BiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-2xl" />

        <input
          type="text"
          value={keyword}
          onChange={handleChangeDebounced}
          placeholder="검색어를 입력해주세요"
          autoFocus
          className="w-full pl-14 pr-5 py-2 sm:py-4 text-lg placeholder:text-sm text-black bg-white rounded-2xl shadow-md outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
      </div>
      <div className="media_grid gap-12  overflow-y-auto h-full hide-scrollbar max-h-[80vh]">
        {isLoading ? (
          <Loading />
        ) : (
          filterData.map((el, index) => <MovieCard key={el.id} data={el} />)
        )}
      </div>
      <Link
        to={'/'}
        className="absolute top-2 right-2 text-2xl sm:text-4xl text-black dark:text-white cursor-pointer"
        onClick={() => setSearchOpen(false)}
      >
        ✕
      </Link>
    </div>
  );
};

export default Search;
