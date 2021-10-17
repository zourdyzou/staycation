import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Filter } from "../components/Misc/Filter";
import { clearError } from "../redux/actions/userAction";
import { Pagination } from "../components/Misc/Pagination";

import { paginate } from "../utils/paginate";
import { CardItem } from "../components/Card/CardItem";

export const Property = () => {
  const dispatch = useDispatch();
  const {
    rooms: data,
    // resPerPage,
    // roomsCount,
    // filteredRoomsCount,
    error,
  } = useSelector((state) => state.allRooms);

  const { page } = useSelector((state) => state.pagination);

  const paginatedData = paginate(data);

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
      <h2 className="px-4 py-16 text-2xl font-semibold text-indigo-600">
        All Listed Property.
      </h2>
      <div className="flex flex-col">
        {/* FILTER & PAGINATION */}
        <div className="flex items-center justify-between px-5 py-10">
          <Filter />

          {/* PAGINATION */}
          <Pagination data={paginatedData} />
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-10 h-screen px-4">
          {paginatedData[page].map((item) => {
            const { _id: id } = item;

            // TODO=> change this later
            //! HARD CODED
            const rating = `${Math.random() * 5}`;

            const newRating = Number(rating).toFixed(1);
            return (
              <CardItem
                key={id}
                id={id}
                title={item.name}
                rating={newRating}
                description={item.description}
                location={item.address}
                price={item.pricePerNight}
                image={item.images[0].url}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
};
