import React from "react";

export const RoomFeature = ({ details }) => {
  return (
    <div className="features mt-5">
      <h3 className="mb-4">Features:</h3>
      <div className="room-feature">
        <i
          className="fa fa-cog fa-fw fa-users text-success"
          aria-hidden="true"
        />
        <p>{details.guestCapacity} Guests</p>
      </div>

      <div className="room-feature">
        <i
          className="fa fa-cog fa-fw fa-bed  text-success"
          aria-hidden="true"
        />
        <p>{details.numOfBeds} Beds</p>
      </div>

      <div className="room-feature">
        <i
          className={
            details.breakfast
              ? "fa fa-check text-success"
              : "fa fa-times text-danger"
          }
          aria-hidden="true"
        />
        <p>Breakfast</p>
      </div>

      <div className="room-feature">
        <i
          className={
            details.internet
              ? "fa fa-wifi text-success"
              : "fa fa-times text-danger"
          }
          aria-hidden="true"
        />
        <p>Internet / WI-FI</p>
      </div>

      <div className="room-feature">
        <i
          className={
            details.airConditioning
              ? "fa fa-check text-success"
              : "fa fa-times text-danger"
          }
          aria-hidden="true"
        />
        <p>Air Conditioner</p>
      </div>

      <div className="room-feature">
        <i
          className={
            details.cleaningService
              ? "fa fa-check text-success"
              : "fa fa-times text-danger"
          }
          aria-hidden="true"
        />
        <p>Cleaning Service</p>
      </div>

      <div className="room-feature">
        <i
          className={
            details.petsAllowed
              ? "fa fa-paw text-success"
              : "fa fa-times text-danger"
          }
          aria-hidden="true"
        />
        <p>Pets</p>
      </div>
    </div>
  );
};
