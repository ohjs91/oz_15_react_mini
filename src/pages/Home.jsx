import React from 'react';
import MovieCard from '@/components/MovieCard';
import Loading from '../components/Loading';
import Error from './Error';
import PopularSwiper from '@/components/PopularSwiper';
import { useQuery } from '@tanstack/react-query';
import { fetchPopularMovies } from '@/api/moviePopular';
const Home = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['movies', 'details'],
    queryFn: fetchPopularMovies,
  });

  if (isLoading) return <Loading />;
  if (isError) return <Error error={error.message} />;

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
