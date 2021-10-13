import { combineReducers } from "redux";

import { allRoomReducer, roomDetailsReducer } from "./roomReducer";
import {
  authReducer,
  userReducer,
  forgotPasswordReducer,
  loadUserReducer,
  travellerReducer,
} from "./userReducer";

import {
  checkReducer,
  bookedDatesReducer,
  myBookingsReducer,
  bookingDetailsReducer,
} from "./bookingReducer";

import {
  getPropertiesReducer,
  propertiesDetailReducer,
  paginationReducer,
} from "./propertiesReducer";

export const reducers = combineReducers({
  auth: authReducer,
  user: userReducer,
  allRooms: allRoomReducer,
  loadUser: loadUserReducer,
  checkBooking: checkReducer,
  roomDetails: roomDetailsReducer,
  forgotPassword: forgotPasswordReducer,
  loadTraveller: travellerReducer,
  bookedDates: bookedDatesReducer,
  myBooking: myBookingsReducer,
  bookingDetails: bookingDetailsReducer,
  allProperties: getPropertiesReducer,
  propertyDetails: propertiesDetailReducer,
  pagination: paginationReducer,
});
