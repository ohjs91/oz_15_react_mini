// src/store/useDataFetch.js (업데이트 완료)
import { create } from 'zustand';
import { API_BASE_URL, API_OPTION } from '@/constants';

const useDataStore = create((set, get) => ({
  // Popular
  popularData: null,
  popularLoading: false,
  popularError: null,

  // Search
  searchData: null,
  searchLoading: false,
  searchError: null,

  // Details
  detailsData: null,
  detailsLoading: false,
  detailsError: null,

  //Video
  videoData: null,
  videoLoading: false,
  videoError: null,

  //Credits
  creditsData: null,
  creditsLoading: false,
  creditsError: null,

  // ------------------------------------------------------------------
  // Popular 액션
  fetchPopularMovies: async () => {
    set({ popularLoading: true, popularError: null });

    try {
      const res = await fetch(
        `${API_BASE_URL}movie/popular?language=ko-KR`,
        API_OPTION,
      );

      const result = await res.json();

      set({ popularData: result, popularLoading: false });
    } catch (err) {
      console.error(err);
      set({
        popularError:
          err.message || '인기 영화 데이터를 가져오는 중 오류가 발생했습니다.',
        popularLoading: false,
      });
    }
  },

  // Search 액션
  fetchSearchMovies: async (query) => {
    if (!query) return;
    set({ searchLoading: true, searchError: null });

    try {
      const res = await fetch(
        `${API_BASE_URL}search/movie?query=${query}&language=ko-KR`,
        API_OPTION,
      );
      const result = await res.json();

      set({ searchData: result ?? [], searchLoading: false });
    } catch (err) {
      console.error(err);
      set({
        searchError:
          err.message || '검색 데이터를 가져오는 중 오류가 발생했습니다.',
        searchLoading: false,
      });
    }
  },
  clearSearchData: () =>
    set({
      searchData: [],
      searchLoading: false,
      searchError: null,
    }),
  // Details 액션
  fetchDetailsMovies: async (movie_id) => {
    set({ detailsLoading: true, detailsError: null });

    try {
      const res = await fetch(
        `${API_BASE_URL}movie/${movie_id}?language=ko-KR`,
        API_OPTION,
      );
      const result = await res.json();

      set({ detailsData: result, detailsLoading: false });
    } catch (err) {
      console.error(err);
      set({
        detailsError:
          err.message || '상세 정보를 가져오는 중 오류가 발생했습니다.',
        detailsLoading: false,
      });
    }
  },

  // Video 액션
  fetchVideoMovies: async (movie_id) => {
    set({ videoLoading: true, videoError: null });

    try {
      const res = await fetch(
        `${API_BASE_URL}movie/${movie_id}/videos?language=ko-KR`,
        API_OPTION,
      );
      const result = await res.json();

      set({ videoData: result, videoLoading: false });
    } catch (err) {
      console.error(err);
      set({
        videoError:
          err.message || '비디오 정보를 가져오는 중 오류가 발생했습니다.',
        videoLoading: false,
      });
    }
  },

  // Credits 액션
  fetchCredisMovies: async (movie_id) => {
    set({ creditsLoading: true, creditsError: null });

    try {
      const res = await fetch(
        `${API_BASE_URL}movie/${movie_id}/credits?language=ko-KR`,
        API_OPTION,
      );
      const result = await res.json();

      set({ creditsData: result, creditsLoading: false });
    } catch (err) {
      console.error(err);
      set({
        creditsError:
          err.message || '출연진 정보를 가져오는 중 오류가 발생했습니다.',
        creditsLoading: false,
      });
    }
  },
}));

export default useDataStore;
