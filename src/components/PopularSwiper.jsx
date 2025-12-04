import React, { useState } from 'react';
import MovieCard from '@/components/MovieCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Zoom } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const PopularSwiper = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <div className="popular_swiper_wrap bg-black">
        <div className="flex-center px-20">
          <img
            className="h-100 w-full"
            src={`${'https://image.tmdb.org/t/p/w1280' + data[activeIndex].backdrop_path}`}
            alt=""
          />
        </div>

        <div className="card_swiper py-10 px-20 text-white relative before:content-[''] before:absolute before:w-full before:h-full before:bg-black before:left-0  before:top-0">
          <h2 className="text-white relative text-3xl pb-2">인기 순위</h2>
          <Swiper
            modules={[Navigation, Pagination, Zoom]}
            spaceBetween={20}
            slidesPerView={7}
            loop={true}
            navigation
            //   pagination={{ clickable: true }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          >
            {data.map((el, index) => (
              <SwiperSlide key={el.id}>
                <MovieCard data={el} no={index + 1} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default PopularSwiper;
