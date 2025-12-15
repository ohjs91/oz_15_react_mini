import React, { useEffect } from 'react';
import MovieCard from '@/components/MovieCard';
import Loading from '../components/Loading';
import Error from './Error';
import PopularSwiper from '@/components/PopularSwiper';
import useDataStore from '@/store/useDataFetch';
const Home = () => {
  const { popularData, popularLoading, popularError, fetchPopularMovies } =
    useDataStore();
  useEffect(() => {
    fetchPopularMovies();
  }, []);
  if (popularLoading) return <Loading />;
  if (popularError) return <Error error={popularError} />;
  if (!popularData) return null;
  const filterData = popularData.results.filter((el) => el.adult === false);
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
