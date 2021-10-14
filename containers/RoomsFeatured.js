import React, { useEffect } from "react";

// import { useRouter } from "next/router";

import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { clearError } from "../redux/actions/roomAction";
import { RoomItem } from "../components/Room/RoomItem";

export const RoomsFeatured = () => {
  const dispatch = useDispatch();
  // const router = useRouter();
  const {
    rooms: allRooms,
    // resPerPage,
    // roomsCount,
    // filteredRoomsCount,
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

  // const [currentPage,setCurrentPage] = useState('')

  // let { location, page = 1 } = router.query;
  // page = Number(page);

  // const handlePagination = (pageNum) => {
  //   router.push(`/?page=${pageNum}`);
  // };

  // let count = roomsCount;

  // if (location) {
  //   count = filteredRoomsCount;
  // }

  return (
    <section className="pt-6 pb-6">
      <h2 className="text-3xl font-semibold p-3 pb-5 text-indigo-800">
        Most picked.
      </h2>

      <div className="flex items-center flex-col md:flex-row md:space-x-3 p-3">
        {allRooms?.slice(0, 4).map((item) => {
          const { name, images, _id: id, pricePerNight, address } = item;

          const rating = `${Math.random() * (5 - 1 + 1)}`;
          const tempRating = Number(rating).toFixed(1);

          return (
            <RoomItem
              name={name}
              images={images[0].url}
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
