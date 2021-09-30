import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { RoomItem } from "../components/Room/RoomItem";

export const Home = () => {
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
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section id="rooms" className="container mt-5">
      <h2 className="mb-3 ml-2 stays-heading">Stays in New York</h2>

      <a href="#" className="ml-2 back-to-search">
        <i className="fa fa-arrow-left" /> Back to Search
      </a>
      <div className="row">
        {allRooms && allRooms.length === 0 ? (
          <div className="alert alert-danger">No Rooms Available.</div>
        ) : (
          allRooms.map((room) => {
            const { _id: id } = room;
            return <RoomItem key={id} id={id} {...room} />;
          })
        )}
      </div>
    </section>
  );
};
