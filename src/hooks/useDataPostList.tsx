import { useEffect, useState } from "react";

export default function useDataPostList(url) {
  // state
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // effect
  useEffect(() => {
    // Reset loading and error states before starting the fetch
    setIsLoading(true);
    setError(null);

    setTimeout(() => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              `Network response was not ok: ${response.statusText}`
            );
          }
          return response.json();
        })
        .then((data) => {
          setData(data);
          setIsLoading(false);
        })
        .catch((error) => {
          setError(
            "There was a problem with the fetch operation: " + error.message
          );
          setIsLoading(false);
        });
    }, 2000);
  }, [url]);

  return { data, isLoading, error };
}
