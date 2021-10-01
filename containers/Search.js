/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import { useRouter } from "next/router";

export const Search = () => {
  const [location, setLocation] = useState("");
  const [guests, setGuests] = useState("");
  const [category, setCategory] = useState("");

  const router = useRouter();

  const submitHandler = (e) => {
    e.preventDefault();

    if (location.trim() && guests && category) {
      router.push(
        `/?location=${location}&guests=${guests}&category=${category}`
      );
    } else {
      router.push("/404.js");
    }
  };

  return (
    <div className="container container-fluid">
      <div className="row wrapper">
        <div className="col-10 col-lg-5">
          <form className="shadow-lg" onSubmit={submitHandler}>
            <h2 className="mb-3">Search Rooms</h2>
            <div className="form-group">
              <label htmlFor="location_field">Location</label>
              <input
                type="text"
                className="form-control"
                id="location_field"
                placeholder="new york"
                value={location}
                onChange={({ target }) => setLocation(target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="guest_field">No. of Guests</label>
              <select
                className="form-control"
                id="guest_field"
                value={guests}
                onChange={({ target }) => setGuests(target.value)}
              >
                {[1, 2, 3, 4, 5, 6].map((num, index) => {
                  return (
                    <option value={num} key={index}>
                      {num}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="room_type_field">Room Type</label>
              <select
                className="form-control"
                id="room_type_field"
                value={category}
                onChange={({ target }) => setCategory(target.value)}
              >
                {["King", "Single", "Twins"].map((roomType, index) => {
                  return (
                    <option key={index} value={roomType}>
                      {roomType}
                    </option>
                  );
                })}
              </select>
            </div>

            <button type="submit" className="btn btn-block py-2">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
