import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useDetails from '@/hooks/useDetailsFetch';
import { IMAGE_BASE_URL, YOUTUBE_EMBED_URL } from '@/constants';
import Loading from '@/pages/Loading';
import Error from '@/pages/Error';
import useVideo from '@/hooks/useVideoFetch';
import useCredits from '@/hooks/useCreditsFetch';
const MovieDetail = () => {
  const { id } = useParams();

  const {
    data: detailData,
    loading: detailLoading,
    error: detailError,
  } = useDetails({
    movie_id: id,
  });
  const {
    data: creditsData,
    loading: creditsLoading,
    error: creditsError,
  } = useCredits({
    movie_id: id,
  });
  const {
    data: videoData,
    loading: videoLoading,
    error: videoError,
  } = useVideo({
    movie_id: id,
  });

  // 감독
  const directors = creditsData?.crew?.filter((c) => c.job === 'Director');
  // 출연진
  const cast = creditsData?.cast;
  // 트레일러
  const trailer = videoData?.results?.find(
    (v) => v.type === 'Trailer' && v.site === 'YouTube',
  );

  // 페이지 마운트시 스크롤 탑으로 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (detailLoading || creditsLoading || videoLoading) return <Loading />;
  if (detailError) return <Error error={detailError} />;

  return (
    <div className="detail_wrap bg-white dark:bg-gray-800 p-12 lg:p-30 flex flex-col gap-24">
      <div className="w-full min-w-100">
        <img
          className="w-full h-120"
          src={IMAGE_BASE_URL + detailData?.backdrop_path}
          alt={detailData?.title}
        />
      </div>
      <div className="w-full text-black dark:text-white">
        {/* 평점 */}
        <div className="flex flex-col gap-12 justify-between ">
          <strong className="text-4xl">{detailData?.title}</strong>
          <span>
            <strong>평점</strong> : ⭐{detailData?.vote_average.toFixed(1)}
          </span>
        </div>
        {/* 장르 */}
        <div className="mt-4 ">
          <strong>장르</strong>
          <div className="flex items-center gap-3 mt-2">
            {detailData?.genres.map((el) => {
              return (
                <span
                  className="inline-block px-3 py-1  rounded-full bg-blue-600 text-white text-sm"
                  key={el.id}
                >
                  {el.name}
                </span>
              );
            })}
          </div>
        </div>
        {/* 줄거라 */}
        <div className="text-left mt-4 ">
          <strong>줄거리</strong>

          <p className="mt-2">
            {detailData.overview
              ? detailData.overview
              : '등록된 정보가 없습니다.'}
          </p>
        </div>
        {/* 감독 정보 */}
        <div className="mt-4">
          <strong>감독</strong>
          <div className="flex gap-4 overflow-x-auto pb-2 hide-scrollbar mt-2">
            {directors?.map((el) => (
              <div key={el.id} className="flex flex-col items-center w-32">
                {el.profile_path ? (
                  <img
                    src={`${IMAGE_BASE_URL}${el.profile_path}`}
                    alt={el.name}
                    className="w-24 h-32 object-cover rounded-lg mb-1"
                  />
                ) : (
                  <div className="w-24 h-32 bg-gray-500 rounded-lg mb-1" />
                )}
                <span className="text-center text-sm font-medium">
                  {el.name}
                </span>
                <span className="text-center text-xs text-gray-400">
                  {el.job}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* 출연진 */}
        <div className="mt-4">
          <strong>출연진</strong>
          <div className="flex gap-2 overflow-x-auto pb-2 mt-2">
            {cast?.map((el) => (
              <div
                key={el.cast_id}
                className="flex flex-col items-center min-w-28 w-28 flex-shrink-0"
              >
                {el.profile_path ? (
                  <img
                    src={`${IMAGE_BASE_URL}${el.profile_path}`}
                    alt={el.name}
                    className="w-full h-28 object-cover rounded-lg mb-1"
                  />
                ) : (
                  <div className="w-full h-28 bg-gray-500 rounded-lg mb-1" />
                )}
                <span className="text-center text-sm font-medium">
                  {el.name}
                </span>
                <span className="text-center text-xs text-gray-400">
                  {el.character}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* 트레일러 */}
        <div className="mt-4">
          <strong>예고편</strong>
          <div className="mt-2 aspect-video w-full">
            <iframe
              src={`${YOUTUBE_EMBED_URL}${trailer?.key}`}
              title={trailer?.name}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
