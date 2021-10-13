import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";

import {
  PAGE_PAGINATION_NUMBER,
  PAGE_PAGINATION_FAIL,
} from "../../redux/constants/paginationConstant";

export const Pagination = ({ data }) => {
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();

  const handlePagination = (index) => {
    setPage(index);
  };

  useEffect(() => {
    try {
      dispatch({ type: PAGE_PAGINATION_NUMBER, payload: page });
    } catch (error) {
      dispatch({ type: PAGE_PAGINATION_FAIL, payload: error.message });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <div className="flex items-center space-x-3">
      <button className="p-2 rounded-[4px] bg-gray-100 border border-gray-300 text-gray-400 hover:bg-blue-600 hover:outline-none hover:text-white w-10 flex items-center justify-center">
        <span>
          <ChevronLeftIcon className="h-4 w-4" />
        </span>
      </button>

      {data &&
        data.map((_, index) => {
          return (
            <button
              key={index}
              onClick={() => handlePagination(index)}
              className="p-1 rounded-[4px] w-10 bg-gray-100 border border-gray-300 text-gray-400 hover:bg-blue-600 hover:outline-none hover:text-white flex items-center justify-center"
            >
              <span className="w-full px-3">{index + 1}</span>
            </button>
          );
        })}

      <button className="p-2 rounded-[4px] w-10 bg-gray-100 border border-gray-300 text-gray-400 hover:bg-blue-600 hover:outline-none hover:text-white flex items-center justify-center">
        <span>
          <ChevronRightIcon className="h-4 w-4" />
        </span>
      </button>
    </div>
  );
};
