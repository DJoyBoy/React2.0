import { useState } from "react";

export const useFetching = (callback) => {
  const [isLoasding, setIsLoasding] = useState(false);
  const [error, setError] = useState("");

  const fetching = async () => {
    try {
      setIsLoasding(true);
      await callback();
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoasding(false);
    }
  };

  return [fetching, isLoasding, error];
};
