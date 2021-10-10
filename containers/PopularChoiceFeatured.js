import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { clearError } from "../redux/actions/roomAction";

import { PopularCard } from "../components/Card/PopularCard";

export const PopularChoiceFeatured = () => {
  const dispatch = useDispatch();
  const {
    rooms: allRooms,

    error,
  } = useSelector((state) => state.allRooms);

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
    <section className="pt-10 pb-6 h-[500px] py-16">
      <h2 className="text-3xl font-semibold p-3 pb-5 text-indigo-800">
        Popular Choices.
      </h2>

      <div className="flex items-center flex-col md:flex-row md:space-x-3 p-3">
        {allRooms?.slice(0, 4).map((item) => {
          const { name, images, _id: id, pricePerNight, address } = item;

          // TEMP
          const rating = `${Math.random() * (5 - 1 + 1)}`;
          const tempRating = Number(rating).toFixed(1);

          return (
            <PopularCard
              name={name}
              images={images[1].url}
              pricePerNight={pricePerNight}
              address={address}
              key={id}
              id={id}
              rating={tempRating}
            />
          );
        })}
      </div>
    </section>
  );
};
