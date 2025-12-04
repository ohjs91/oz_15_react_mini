import React from 'react';
import { Link } from 'react-router-dom';
const MovieCard = ({ data }) => {
  const baseUrl = 'https://image.tmdb.org/t/p/w500';
  //   console.log(data);
  return (
    <Link to={`/details/${data.id}`} className="movie-card ">
      <div className="h-[300px] mb-3 rounded-2xl overflow-hidden">
        <img
          className="w-full h-full"
          src={baseUrl + data.poster_path}
          alt={data.title}
        />
      </div>
      <div className="mb-1.5 ">
        <strong>{data.title}</strong>
      </div>
      <div className="text-right">평점 : {data.vote_average.toFixed(1)}</div>
    </Link>
  );
};

export default MovieCard;
