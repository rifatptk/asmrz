import axios from "axios";
import { useEffect, useState } from "react";

/**

Custom hook to fetch data from a URL using axios and manage the loading and error state.
@param {string} url - The URL to fetch data from.
@param {Array} [dependencies=[]] - The optional array of dependencies to include in the useEffect hook.
@returns {Object} An object with isLoading, data, and error properties.
*/

export default function useDataFetcher(url, dependencies = []) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    let isMounted = true;
    axios
      .get(url)
      .then((res) => {
        if (isMounted) {
          setData(res.data);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err);
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [url, ...dependencies]);

  return { isLoading, data, error };
}
