import React, { useState } from 'react';
import MovieCard from '@/components/MovieCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Zoom } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';
const PopularSwiper = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <div className="popular_swiper_wrap bg-black">
        <div className="flex-center relative px-0 lg:px-20">
          <img
            className="h-100 w-full"
            src={`${'https://image.tmdb.org/t/p/w1280' + data[activeIndex].backdrop_path}`}
            alt=""
          />
          <div className="hidden sm:block hide-scrollbar w-[300px] h-[300px] overflow-y-auto bg-black/50 absolute top-[30px] left-[130px] text-white rounded-2xl p-8 z-2">
            <strong className="text-2xl">{data[activeIndex].title}</strong>
            <p className="mt-2">
              {data[activeIndex].overview
                ? data[activeIndex].overview
                : '등록된 정보가 없습니다.'}
            </p>
          </div>
        </div>

        <div className="card_swiper py-10 lg:py-12 px-10 lg:px-12 text-black relative before:content-[''] before:absolute before:w-full before:h-full before:bg-white dark:before:bg-gray-800 before:left-0  before:top-0">
          <h2 className="text-black dark:text-white relative text-3xl pb-2">
            인기 순위
          </h2>
          <Swiper
            modules={[Navigation, Pagination, Zoom]}
            spaceBetween={20}
            loop={true}
            navigation
            //   pagination={{ clickable: true }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 6,
                spaceBetween: 20,
              },
            }}
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
