import {
  CHECK_BOOKING_REQUEST,
  CHECK_BOOKING_SUCCESS,
  CHECK_BOOKING_FAIL,
  CHECK_BOOKING_RESET,
  BOOKED_DATES_SUCCESS,
  BOOKED_DATES_FAIL,
  CLEAR_ERRORS,
  MY_BOOKINGS_SUCCESS,
  MY_BOOKINGS_FAIL,
  BOOKING_DETAILS_FAIL,
  BOOKING_DETAILS_SUCCESS,
} from "../constants/bookingConstant";

//  CHECK BOOKING
export const checkReducer = (state = { available: null }, action) => {
  switch (action.type) {
    case CHECK_BOOKING_REQUEST:
      return {
        loading: true,
      };

    case CHECK_BOOKING_SUCCESS:
      return {
        loading: false,
        available: action.payload,
      };

    case CHECK_BOOKING_RESET:
      return {
        loading: false,
        available: null,
      };

    case CHECK_BOOKING_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        error: null,
      };

    default:
      return state;
  }
};

// GET ALL BOOKED DATES
export const bookedDatesReducer = (state = { dates: [] }, action) => {
  switch (action.type) {
    case BOOKED_DATES_SUCCESS:
      return {
        dates: action.payload,
      };
    case BOOKED_DATES_FAIL:
      return {
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        error: null,
      };

    default:
      return state;
  }
};

// HANDLE ALL BOOKED DATES FROM THE CURRENT USER LOGGED
export const myBookingsReducer = (state = { bookings: [] }, action) => {
  switch (action.type) {
    case MY_BOOKINGS_SUCCESS:
      return {
        bookings: action.payload,
      };
    case MY_BOOKINGS_FAIL:
      return {
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        error: null,
      };

    default:
      return state;
  }
};

// HANDLE BOOKING DETAILS FROM THE CURRENT USER LOGGED
export const bookingDetailsReducer = (state = { bookings: {} }, action) => {
  switch (action.type) {
    case BOOKING_DETAILS_SUCCESS:
      return {
        bookings: action.payload,
      };
    case BOOKING_DETAILS_FAIL:
      return {
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        error: null,
      };

    default:
      return state;
  }
};
