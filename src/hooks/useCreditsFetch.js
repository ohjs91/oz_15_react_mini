import { useState, useEffect } from 'react';
import { API_BASE_URL, API_OPTION } from '@/constants';

export const useCredits = ({ movie_id }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(
          `${API_BASE_URL}movie/${movie_id}/credits?language=ko-KR`,
          API_OPTION,
        );
        const result = await res.json();

        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [movie_id]);
  return { data, loading, error };
};
export default useCredits;
