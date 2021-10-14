import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { DateRange } from "react-date-range";
import Slider from "react-slick";
import Image from "next/image";

import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";
import {
  clearErrors,
  checkBooking,
  getBookedDates,
} from "../../redux/actions/bookingAction";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { CHECK_BOOKING_RESET } from "../../redux/constants/bookingConstant";

import { RoomFeature } from "./RoomFeature";

export const RoomDetails = ({ error, details }) => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const [daysOfStay, setDaysOfStay] = useState();
  const { user } = useSelector((state) => state.loadUser);

  const { available, loading: bookingLoading } = useSelector(
    (state) => state.checkBooking
  );

  const onChange = (dates) => {
    setDate([dates.selection]);

    if (dates.selection.startDate && dates.selection.endDate) {
      // CALCULATE DAYS OF STAY
      const dateStart = new Date(dates.selection.startDate);
      const endDates = new Date(dates.selection.endDate);

      const differenceInTime = endDates.getTime() - dateStart.getTime();

      const differenceInDays = differenceInTime / (1000 * 3600 * 24);

      const days = Math.floor(differenceInDays);

      setDaysOfStay(days);
      dispatch(
        checkBooking(
          id,
          dates.selection.startDate.toISOString(),
          dates.selection.endDate.toISOString()
        )
      );
    }
  };

  const newBookingHandler = async () => {
    const bookingData = {
      room: router.query.id,
      checkInDate: date[0].startDate,
      checkOutDate: date[0].endDate,
      daysOfStay,
      amountPaid: 90,
      paymentInfo: {
        id: "STRIPE_PAYMENT_ID",
        status: "STRIPE_PAYMENT_STATUS",
      },
    };

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post("/api/booking", bookingData, config);

      console.log({
        DATA: data,
      });
    } catch (err) {
      console.log({
        RESPONSES: err.response,
      });
    }
  };

  useEffect(() => {
    dispatch(getBookedDates(id));

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

      dispatch(clearErrors());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, id]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    slickPlay: true,
  };

  return (
    <main className="max-w-6xl mx-auto py-32">
      <div className="flex flex-col px-2">
        <div className="flex flex-col px-3 mb-10 space-y-2">
          <h2 className="text-2xl md:text-3xl text-indigo-800 font-bold">
            {details.name}
          </h2>
          <p className="text-lg text-gray-500">{details.address}</p>
        </div>

        {/* //TODO: IMAGE SLIDER CAROUSEL  */}
        <Slider {...settings} className="mb-16 px-2">
          {details.images?.map((image) => {
            const { _id: keyID } = image;
            return (
              <div
                key={keyID}
                className="relative h-[270px] sm:h-[430px] md:h-[650px] w-full"
              >
                <Image
                  src={image.url}
                  className=" rounded-md bg-cover bg-center"
                  alt="Hotel"
                  layout="fill"
                />
              </div>
            );
          })}
        </Slider>

        {/* //TODO: FIX THIS LAYOUT LATER */}
        <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 justify-between px-4">
          {/* DESCRIPTION */}
          <div className=" flex flex-col md:w-[680px]">
            <h3 className="text-2xl font-semibold text-indigo-600 py-3 px-1">
              About the place.
            </h3>
            <p className="w-full p-1 break-words">{details.description}</p>

            <RoomFeature details={details} />
          </div>

          {/* BOOKING SECTION */}
          <div className="w-[340px] flex flex-col group">
            <div className="">
              <h1 className="text-2xl font-semibold text-indigo-600 mb-4">
                Start Booking.
              </h1>
              <p className="text-3xl text-gray-400 mb-5">
                <span className="text-green-500 font-semibold">
                  ${details.pricePerNight}
                </span>{" "}
                / night
              </p>

              <p className="">Pick Check In & Check Out Date</p>

              <DateRange
                editableDateInputs
                onChange={onChange}
                moveRangeOnFirstSelection={false}
                ranges={date}
              />

              {available === true && (
                <div className="flex items-center justify-center px-3 py-4 bg-gradient-to-br from-green-400 to-purple-400 text-white  rounded-md">
                  <h1>Room is available. Book now.</h1>
                </div>
              )}

              {available === false && (
                <div className="">
                  Room is not available, Try different date
                </div>
              )}

              {available && !user && (
                <div className="flex items-center">
                  <h1>Login to book the reom</h1>
                </div>
              )}

              {available && user && (
                <button
                  className="py-4 text-white bg-gradient-to-tr from-purple-400 to-red-500 w-full mt-5 rounded-md hover:from-purple-700 hover:to-red-400 transition ease-in duration-150"
                  onClick={newBookingHandler}
                  disabled={!!bookingLoading}
                >
                  Pay ${daysOfStay * details.pricePerNight}
                </button>
              )}
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
    </main>
  );
};
