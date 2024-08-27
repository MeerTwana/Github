import { useEffect, useState } from "react";

export function useFetch(fetchFn) {
  const [isFetching, setIsFetching] = useState(false); // Initialize isFetching as false
  const [error, setError] = useState(null); // Initialize error as null
  const [fetchData, setFetchData] = useState([]); // Initialize fetchData as an empty array

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const data = await fetchFn();
        setFetchData(data); // Use the fetched data directly
      } catch (error) {
        setError({ message: error.message || 'Failed to fetch data places.' });
      } finally {
        setIsFetching(false); // Ensure loading state is updated
      }
    }

    fetchData();
  }, [fetchFn]);

  return {
    isFetching,
    fetchData,
    error
  };
}

// Add this line to export useFetch as default
export default useFetch;
