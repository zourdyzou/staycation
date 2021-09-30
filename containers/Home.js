/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/button-has-type */
import React from "react";

import { useSelector } from "react-redux";
import { RoomItem } from "../components/Room/RoomItem";

export const Home = () => {
  const { rooms: allRooms } = useSelector((state) => state.allRooms.rooms);

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
