import { API_BASE_URL, API_OPTION } from '@/constants/index';

export async function fetchPopularMovies() {
  const res = await fetch(
    `${API_BASE_URL}movie/popular?language=ko-KR`,
    API_OPTION,
  );

  if (!res.ok) {
    throw new Error('인기 영화 데이터를 가져오지 못했습니다.');
  }

  return res.json();
}
