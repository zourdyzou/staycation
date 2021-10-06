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
} from "./bookingReducer";

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
});
