import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import moment from "moment";

import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import { clearErrors } from "../../redux/actions/bookingAction";

export const BookingDetails = () => {
  const dispatch = useDispatch();
  const { bookings, error } = useSelector((state) => state.bookingDetails);
  const { _id: id } = bookings;

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <div className="container">
      <div className="row d-flex justify-content-between">
        <div className="col-12 col-lg-8 mt-5 booking-details">
          {bookings && (
            <>
              <h2 className="my-5">Booking # {id}</h2>

              <h4 className="mb-4">User Info</h4>
              <p>
                <b>Username:</b> {bookings.user.name}
              </p>
              <p>
                <b>Email:</b> {bookings.user.email}
              </p>
              <p>
                <b>Amount:</b> ${bookings.amountPaid}
              </p>

              <hr />

              <h4 className="mb-4">Booking Info</h4>
              <p>
                <b>Check In:</b> {moment(bookings.checkInDate).format("LLLL")}
              </p>
              <p>
                <b>Check Out:</b> {moment(bookings.checkOutDate).format("LLLL")}
              </p>
              <p>
                <b>Days of Stay:</b> {bookings.daysOfStay}
              </p>

              <hr />

              <h4 className="my-4">Payment Status</h4>
              <p className="greenColor">
                <b>Paid</b>
              </p>

              <h4 className="mt-5 mb-4">Booked Room:</h4>

              <hr />
              <div className="cart-item my-1">
                <div className="row my-5">
                  <div className="col-4 col-lg-2">
                    <Image
                      src={bookings.room.images[0].url}
                      alt={bookings.room.name}
                      width={100}
                      height={70}
                    />
                  </div>

                  <div className="col-5 col-lg-5">
                    <Link passhref href="/">
                      <a>{bookings.room.name}</a>
                    </Link>
                  </div>

                  <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                    <p>${bookings.room.pricePerNight}</p>
                  </div>

                  <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                    <p>{bookings.daysOfStay} Day(s)</p>
                  </div>
                </div>
              </div>
              <hr />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
