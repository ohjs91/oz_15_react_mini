import React, { useEffect } from 'react';
import MovieCard from '@/components/MovieCard';
import useFetch from '@/hooks/useFetch';
import Loading from './Loading';
import Error from './Error';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Zoom } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const Home = () => {
  const { data, loading, error } = useFetch({
    type: 'popular',
  });
  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  const filterData = data.results.filter((el) => el.adult === false);
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
          {filterData.map((el) => (
            <SwiperSlide key={el.id}>
              <MovieCard data={el} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="grid grid-cols-6 gap-12 mt-12">
        {filterData.map((el) => (
          <MovieCard key={el.id} data={el} />
        ))}
      </div>
    </>
  );
};

export default Home;
