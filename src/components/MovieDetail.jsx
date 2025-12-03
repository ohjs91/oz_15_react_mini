import React from 'react';
import DetailData from '../data/movieDetailData';
console.log(DetailData);
const baseUrl = 'https://image.tmdb.org/t/p/w500';
const MovieDetail = () => {
  return (
    <div className="detail_wrap flex gap-24">
      <div className="w-1/2">
        <img className="w-full" src={baseUrl + DetailData.poster_path} alt="" />
      </div>
      <div className="w-1/2">
        <div className="flex flex-col gap-12 justify-between mb-24">
          <strong className="text-4xl">{DetailData.title}</strong>
          <span>평점 : {DetailData.vote_average}</span>
        </div>
        <div className="flex gap-3 mb-24">
          {DetailData.genres.map((el) => {
            return <span>{el.name}</span>;
          })}
        </div>
        <p className="text-left">{DetailData.overview}</p>
      </div>
    </div>
  );
};

export default MovieDetail;
