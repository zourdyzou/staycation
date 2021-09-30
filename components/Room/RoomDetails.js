/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
// import Image from "next/image";

import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Slider from "react-slick";
import { clearError } from "../../redux/actions/roomAction";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const RoomDetails = () => {
  const dispatch = useDispatch();
  const {
    room: { room: details },
    error,
  } = useSelector((state) => state.roomDetails);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

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
    <>
      <div className="container container-fluid">
        <h2 className="mt-5">{details.name}</h2>
        <p>{details.address}</p>

        <div className="ratings mt-auto mb-3">
          <div className="rating-outer">
            <div className="rating-inner" />
          </div>
          <span id="no_of_reviews">
            (
            {`${details.numOfReviews} ${
              details.numOfReviews > 1 ? "Reviews" : "Review"
            }`}
            )
          </span>
        </div>

        <Slider {...settings}>
          {details.images.map((image) => {
            const { _id: id } = image;
            return (
              <div key={id}>
                <img
                  src={image.url}
                  className="d-block w-100 property-details-image m-auto"
                  alt="Hotel"
                />
              </div>
            );
          })}
        </Slider>

        <div className="row my-5">
          <div className="col-12 col-md-6 col-lg-8">
            <h3>Description</h3>
            <p>
              We are offering fully furnished apartment with your all basic
              needs being fulfilled. It consists of 2 king size bed room with a
              beautiful view in the living room, it also has a fully operational
              kitchen with microwave and basic crockery. Beside all it has a
              amazing balcony infront of valley view.
            </p>

            <div className="features mt-5">
              <h3 className="mb-4">Features:</h3>
              <div className="room-feature">
                <i className="fa fa-cog fa-fw fa-users" aria-hidden="true" />
                <p>6 Guests</p>
              </div>

              <div className="room-feature">
                <i className="fa fa-cog fa-fw fa-bed" aria-hidden="true" />
                <p>2 Beds</p>
              </div>

              <div className="room-feature">
                <i className="fa fa-cog fa-fw fa-bath" aria-hidden="true" />
                <p>2 Baths</p>
              </div>

              <div className="room-feature">
                <i className="fa fa-cog fa-fw fa-cutlery" aria-hidden="true" />
                <p>Kitchen</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="booking-card shadow-lg p-4">
              <p className="price-per-night">
                <b>$28</b> / night
              </p>

              <button className="btn btn-block py-3 booking-btn">Pay</button>
            </div>
          </div>
        </div>

        {details.numOfReviews !== 0 && (
          <div className="reviews w-75">
            <h3>Reviews:</h3>
            <hr />
            <div className="review-card my-3">
              <div className="rating-outer">
                <div
                  className="rating-inner"
                  style={{ width: `${(details.ratings / 5) * 100}%` }}
                />
              </div>
              <p className="review_user">by John</p>
              <p className="review_comment">Good Quality</p>

              <hr />
            </div>

            <div className="review-card my-3">
              <div className="rating-outer">
                <div
                  className="rating-inner"
                  style={{ width: `${(details.ratings / 5) * 100}%` }}
                />
              </div>
              <p className="review_user">by John</p>
              <p className="review_comment">Good Quality</p>

              <hr />
            </div>
          </div>
        )}
      </div>
    </>
  );
};
