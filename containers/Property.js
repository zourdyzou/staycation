import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Filter } from "../components/Misc/Filter";
import { Pagination } from "../components/Misc/Pagination";
import { clearError } from "../redux/actions/propertiesAction";

import { paginate } from "../utils/paginate";

export const Property = () => {
  const dispatch = useDispatch();
  const {
    properties: { properties: data },
    error,
  } = useSelector((state) => state.allProperties);

  const paginatedData = paginate(data);

  console.log(paginatedData);

  useEffect(() => {
    if (error) {
      toast.error(`🦄 ${error}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      dispatch(clearError());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="max-w-6xl mx-auto">
      <h2 className="text-indigo-600 text-2xl font-semibold py-16 px-4">
        All Listed Property.
      </h2>
      <div>
        {/* FILTER & PAGINATION */}
        <div className="flex justify-between items-center px-5">
          <Filter />
          <Pagination data={paginatedData} />
        </div>

        {/* CARDS */}
      </div>
    </main>
  );
};
