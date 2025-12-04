import React, { useEffect } from 'react';
import MovieData from '@/data/movieListData.json';
import MovieCard from '@/components/MovieCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Zoom } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { API_KEY, API_TOKEN, BASE_URL } from '@/constants';
const Home = () => {
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_TOKEN}`,
      },
    };

    fetch(`${BASE_URL}popular?language=ko`, options)
      .then((res) => res.json())
      .then((res) => console.log('TMDB API 결과:', res))
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      {/* 스와이퍼 영역 나중에 컴포넌트 분리하기 */}
      <div className="card_swiper h-110 px-20">
        <Swiper
          modules={[Navigation, Pagination, Zoom]}
          spaceBetween={20}
          slidesPerView={8}
          //   navigation
          pagination={{ clickable: true }}
        >
          {MovieData.results.map((el) => (
            <SwiperSlide key={el.id}>
              <MovieCard data={el} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="grid grid-cols-6 gap-12 mt-12">
        {MovieData.results.map((el) => (
          <MovieCard key={el.id} data={el} />
        ))}
      </div>
    </>
  );
};

export default Home;
