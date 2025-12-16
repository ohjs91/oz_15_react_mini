import { API_BASE_URL, API_OPTION } from '@/constants';

export async function fetchMovieCredits(movieId) {
  const res = await fetch(
    `${API_BASE_URL}movie/${movieId}/credits?language=ko-KR`,
    API_OPTION,
  );

  if (!res.ok) {
    throw new Error('출연진 정보를 가져오지 못했습니다.');
  }

  return res.json();
}
