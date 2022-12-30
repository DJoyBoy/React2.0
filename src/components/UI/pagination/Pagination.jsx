import React from "react";
import { usePegination } from "../../hooks/usePegination";

const Pagination = ({ totalPages, page, changePage }) => {
  let pagesArray = usePegination(totalPages);

  return (
    <div className="page__wrapper">
      {pagesArray.map((p) => (
        <span
          key={p}
          className={page === p ? "page page__current" : "page"}
          onClick={() => changePage(p)}
        >
          {p}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
