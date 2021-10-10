import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { clearError } from "../redux/actions/roomAction";
import { RoomItem } from "../components/Room/RoomItem";

export const HomeFeatured = () => {
  const dispatch = useDispatch();
  const { rooms: allRooms, error } = useSelector((state) => state.allRooms);

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
        Tropical Home Stay.
      </h2>

      {/* //* CHANGE THE DATA LATER ON => production ready to the actual rooms data
    //todo: 1. CREATE MODELS, SCHEMA AND CONTROLLERS FROM HOMESTAY DATA
*/}
      <div className="flex items-center flex-col md:flex-row md:space-x-3 p-3">
        {allRooms?.slice(0, 4).map((item) => {
          const { name, images, _id: id, pricePerNight, address } = item;
          const rating = `${Math.random() * (5 - 1 + 1)}`;
          const tempRating = Number(rating).toFixed(1);

          return (
            <RoomItem
              name={name}
              images={images[2].url}
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
