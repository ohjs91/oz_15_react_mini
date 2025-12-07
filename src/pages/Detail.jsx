import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '@/hooks/useFetch';
import { IMAGE_BASE_URL } from '@/constants';
import Loading from '@/pages/Loading';
import Error from '@/pages/Error';
const MovieDetail = () => {
  const { id } = useParams();

  const { data, loading, error } = useFetch({
    type: 'detail',
    movie_id: id,
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  return (
    <div className="detail_wrap flex gap-24">
      <div className="w-1/2">
        <img
          className="w-full"
          src={IMAGE_BASE_URL + data.poster_path}
          alt={data.title}
        />
      </div>
      <div className="w-1/2">
        <div className="flex flex-col gap-12 justify-between mb-24">
          <strong className="text-4xl">{data.title}</strong>
          <span>평점 : {data.vote_average.toFixed(1)}</span>
        </div>
        <div className="flex gap-3 mb-24">
          <strong>장르</strong>

          {data.genres.map((el) => {
            return <span key={el.id}>{el.name}</span>;
          })}
        </div>
        <p className="text-left ">
          <strong>정보 : </strong>

          {data.overview ? data.overview : '등록된 정보가 없습니다.'}
        </p>
      </div>
    </div>
  );
};

export default MovieDetail;
