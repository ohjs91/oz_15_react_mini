import { API_BASE_URL, API_OPTION } from '@/constants';

export async function fetchMovieDiscover(page = 1) {
  const res = await fetch(
    `${API_BASE_URL}discover/movie?language=ko-KR`,
    API_OPTION,
  );

  if (!res.ok) {
    throw new Error('영화를 가져오지 못했습니다.');
  }

  return res.json();
}
