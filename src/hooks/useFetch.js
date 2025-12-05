import { useState, useEffect } from 'react';
import { API_TOKEN, API_BASE_URL } from '@/constants';

export const useFetch = ({ type, movie_id }) => {
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

        let url = '';
        switch (type) {
          case 'popular':
            url = `${API_BASE_URL}popular?language=ko-KR`;
            break;

          case 'detail':
            url = `${API_BASE_URL}${movie_id}?language=ko-KR`;
            break;

          default:
            return;
        }
        const res = await fetch(url, options);
        const result = await res.json();

        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [type, movie_id]);
  return { data, loading, error };
};
export default useFetch;
