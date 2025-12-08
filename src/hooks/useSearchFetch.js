import { useState, useEffect } from 'react';
import { API_BASE_URL, API_OPTION } from '@/constants';

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
        const res = await fetch(
          `${API_BASE_URL}search/movie?query=${keyword}&language=ko-KR&include_adult=false`,
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
  }, [keyword]);
  return { data, loading, error };
};
export default useSearch;
