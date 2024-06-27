// Pagination

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../features/articlesSlice";

const Pagination = () => {
  const dispatch = useDispatch();
  const { page } = useSelector((state) => state.articles);

  const handlePrevious = () => {
    if (page > 1) dispatch(setPage(page - 1));
  };

  const handleNext = () => {
    dispatch(setPage(page + 1));
  };

  return (
    <div className="flex justify-between mt-6">
      <button
        onClick={handlePrevious}
        disabled={page === 1}
        className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        Previous
      </button>
      <button
        onClick={handleNext}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
