import { useState, useEffect } from "react";
import instance from "../NEW_utils/axios";

const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [scores, setScores] = useState(null);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    instance
      .get("/api/v1/scores")
      .then((response) => {
        setScores(response.data.scores);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(setLoading(false));

    instance
      .get("/api/v1/results")
      .then((response) => {
        setResults(response.data.results);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    scores,
    results,
    loading,
    error,
  };
};

export default useFetch;
