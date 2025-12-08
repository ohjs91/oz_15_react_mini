import React, { useEffect } from 'react';
import MovieCard from '@/components/MovieCard';
import useFetch from '@/hooks/useFetch';
import Loading from './Loading';
import Error from './Error';
import PopularSwiper from '@/components/PopularSwiper';
const Home = () => {
  const { data, loading, error } = useFetch({});
  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  const filterData = data.results.filter((el) => el.adult === false);
  return (
    <>
      <PopularSwiper data={filterData} />

      <div className="media_grid gap-12 pt-12 px-20 bg-white dark:bg-gray-800">
        {filterData.map((el) => (
          <MovieCard key={el.id} data={el} />
        ))}
      </div>
    </>
  );
};

export default Home;
