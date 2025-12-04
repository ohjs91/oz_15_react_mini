import React, { useEffect } from 'react';
import MovieDetail from '@/components/MovieDetail';

const Details = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <MovieDetail />;
};

export default Details;
