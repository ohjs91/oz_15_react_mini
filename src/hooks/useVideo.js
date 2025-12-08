import { useState, useEffect } from 'react';
import { API_TOKEN, API_BASE_URL } from '@/constants';

export const useVideo = ({ movie_id }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_TOKEN}`,
          },
        };

        const res = await fetch(
          `${API_BASE_URL}movie/${movie_id}/videos?language=ko-KR`,
          options,
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
export default useVideo;
