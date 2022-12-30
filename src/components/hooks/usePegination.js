import { useMemo } from "react";

export const usePegination = (totalPages) => {
  let pages = [];
  const usePegis = useMemo(() => {
    for (let i = 0; i < totalPages; i++) {
      pages.push(i + 1);
    }
    return pages;
  }, [totalPages]);
  return usePegis;
};
