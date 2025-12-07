import { useState, useEffect } from 'react';
import { API_TOKEN, API_BASE_URL } from '@/constants';

export const useSearch = ({ keyword }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (keyword == '') {
        setData([]);
        setLoading(false);
        return;
      }
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
          `${API_BASE_URL}search/movie?query=${keyword}&language=ko-KR&include_adult=false`,
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
  }, [keyword]);
  return { data, loading, error };
};
export default useSearch;
