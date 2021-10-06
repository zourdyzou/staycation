import axios from "axios";
import absoluteUrl from "next-absolute-url";

import {
  CHECK_BOOKING_REQUEST,
  CHECK_BOOKING_SUCCESS,
  CHECK_BOOKING_FAIL,
  CLEAR_ERRORS,
  BOOKED_DATES_SUCCESS,
  BOOKED_DATES_FAIL,
  MY_BOOKINGS_SUCCESS,
  MY_BOOKINGS_FAIL,
  BOOKING_DETAILS_FAIL,
  BOOKING_DETAILS_SUCCESS,
} from "../constants/bookingConstant";

// CHECK BOOKING ACTION
export const checkBooking =
  (roomId, checkInDate, checkOutDate) => async (dispatch) => {
    try {
      dispatch({ type: CHECK_BOOKING_REQUEST });

      let link = `/api/booking/check?roomId=${roomId}&checkInDate=${checkInDate}&checkOutDate=${checkOutDate}`;

      const { data } = await axios.get(link);

      dispatch({
        type: CHECK_BOOKING_SUCCESS,
        payload: data.isAvailable,
      });
    } catch (error) {
      dispatch({
        type: CHECK_BOOKING_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// GET BOOKED DATES ACTION
export const getBookedDates = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `/api/booking/check-booked-dates?roomId=${id}`
    );

    dispatch({
      type: BOOKED_DATES_SUCCESS,
      payload: data.bookedDates,
    });
  } catch (error) {
    dispatch({
      type: BOOKED_DATES_FAIL,
      payload: error.response.data.message,
    });
  }
};

// GET BOOKED DATES FROM CURRENT USER => ACTION
export const getMyBookings = (authCookie, req) => async (dispatch) => {
  try {
    const { origin } = absoluteUrl(req);

    const config = {
      headers: {
        cookie: authCookie,
      },
    };

    const { data } = await axios.get(`${origin}/api/booking/me`, config);

    dispatch({
      type: MY_BOOKINGS_SUCCESS,
      payload: data.bookings,
    });
  } catch (error) {
    dispatch({
      type: MY_BOOKINGS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// GET BOOKING DETAILS FROM CURRENT USER => ACTION
export const myBookingDetails = (authCookie, req, id) => async (dispatch) => {
  try {
    const { origin } = absoluteUrl(req);

    const config = {
      headers: {
        cookie: authCookie,
      },
    };

    const { data } = await axios.get(`${origin}/api/booking/${id}`, config);

    dispatch({
      type: BOOKING_DETAILS_SUCCESS,
      payload: data.bookings,
    });
  } catch (error) {
    dispatch({
      type: BOOKING_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clear Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
