/* eslint-disable react/button-has-type */
import React from "react";
import Image from "next/image";
import Link from "next/link";

export const RoomItem = ({
  images,
  id,
  name,
  pricePerNight,
  ratings,
  numOfReviews,
}) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
      <div className="card p-2">
        <Image
          className="card-img-top mx-auto"
          alt="info card  travelling"
          src={images[0].url}
          height={170}
          width={170}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">
            <Link href={`/room/${id}`} passHref>
              <a>{name}</a>
            </Link>
          </h5>

          <div className="ratings mt-auto mb-3">
            <p className="card-text">
              <b>${pricePerNight}</b> / night
            </p>

            <div className="rating-outer">
              <div
                className="rating-inner"
                style={{ width: `${(ratings / 5) * 100}%` }}
              />
            </div>
            <span id="no_of_reviews">({numOfReviews} Reviews)</span>
          </div>

          <button className="btn btn-block view-btn">
            <Link href={`/room/${id}`}>View Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
