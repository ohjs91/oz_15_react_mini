import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGE_BASE_URL } from '@/constants';
import useLazyImages from '@/hooks/useLazyImages';
const MovieCard = ({ data, no }) => {
  const imgRef = useLazyImages();
  return (
    <Link to={`/details/${data.id}`} className="movie-card ">
      {no && <strong className="text-black dark:text-white">{no}</strong>}
      <div className="h-[300px] mb-3 rounded-2xl overflow-hidden">
        <img
          ref={imgRef}
          data-src={IMAGE_BASE_URL + data.poster_path}
          className="w-full h-full"
          alt={data.title}
        />
      </div>
      <div className="mb-1.5 truncate text-black dark:text-white">
        <strong className="">{data.title}</strong>
      </div>
      <div className="text-right text-black dark:text-white">
        평점 : {data.vote_average.toFixed(1)}
      </div>
    </Link>
  );
};

export default MovieCard;
