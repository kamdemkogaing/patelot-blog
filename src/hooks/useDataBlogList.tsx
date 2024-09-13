import { useEffect, useState } from "react";

export default function useDataBlogList(url) {
  // state
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // effect
  useEffect(() => {
    const abortController = new AbortController();

    // Reset loading and error states before starting the fetch
    setIsLoading(true);
    setError(null);

    fetch(url, { signal: abortController.signal })
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
        if (error.name === "AbortError") {
          console.log(
            "here was a problem with the fetch operation: ",
            error.message
          );
        } else {
          setError(
            "There was a problem with the fetch operation: " + error.message
          );
          setIsLoading(false);
        }
      });

    return () => abortController.abort();
  }, [url]);

  return { data, isLoading, error };
}
