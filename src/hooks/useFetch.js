import { useState, useEffect } from 'react';
import { API_TOKEN, BASE_URL } from '@/constants';

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
            url = `${BASE_URL}popular?language=ko-KR`;
            break;

          case 'detail':
            url = `${BASE_URL}${movie_id}?language=ko-KR`;
            // console.log(url);
            break;

          default:
            return;
        }
        const res = await fetch(url, options);
        const json = await res.json();

        // console.log(json);
        setData(json);
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
