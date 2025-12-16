import { API_BASE_URL, API_OPTION } from '@/constants';

export async function fetchSearchMovies(query) {
  if (!query) return null;

  const res = await fetch(
    `${API_BASE_URL}search/movie?query=${encodeURIComponent(
      query,
    )}&language=ko-KR`,
    API_OPTION,
  );

  if (!res.ok) {
    throw new Error('검색 데이터를 가져오지 못했습니다.');
  }

  return res.json();
}
