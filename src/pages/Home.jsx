import React, { useEffect, useRef } from 'react';
import MovieCard from '@/components/MovieCard';
import Loading from '../components/Loading';
import Error from './Error';
import PopularSwiper from '@/components/PopularSwiper';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { fetchMovieDiscover } from '@/api/movieDiscover';
import ErrorFallback from '@/common/ErrorFallback';
import { ErrorBoundary } from 'react-error-boundary';
const Home = () => {
  const observeRef = useRef(null);
  // const { data, isLoading, isError, error } = useQuery({
  //   queryKey: ['movies', 'discover'],
  //   queryFn: fetchMovieDiscover,
  // });

  const {
    data,
    isLoading,
    isError,
    error,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ['movies', 'discover'],
    queryFn: ({ pageParam = 1 }) => fetchMovieDiscover({ page: pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.page < lastPage.total_pages
        ? lastPage.page + 1
        : undefined;
    },
  });

  useEffect(() => {
    // 감시할 dom이 없거나 더불러올 페이지가 없거나 다음 페이지 불러오는 중이면 return
    if (!observeRef.current || !hasNextPage || isFetchingNextPage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // 감시 대상이 화면 안에 들어옴
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      },
      { threshold: 1.0 },
    );

    observer.observe(observeRef.current);

    return () => observer.disconnect();
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (isLoading) return <Loading />;
  if (isError) return <Error error={error.message} />;

  const allMovies = data.pages
    .flatMap((page) => page.results)
    .filter((el) => el.adult === false);
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <PopularSwiper />

      <div className="media_grid gap-12 pt-12 px-20 bg-white dark:bg-gray-800">
        {allMovies.map((el, index) => (
          <MovieCard key={el.id + index} data={el} />
        ))}
      </div>
      <div ref={observeRef}></div>
    </ErrorBoundary>
  );
};

export default Home;
