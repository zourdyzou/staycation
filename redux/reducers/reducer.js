import { combineReducers } from "redux";

import { allRoomReducer, roomDetailsReducer } from "./roomReducer";
import {
  authReducer,
  userReducer,
  forgotPasswordReducer,
  loadUserReducer,
} from "./userReducer";

import { checkReducer } from "./bookingReducer";

export const reducers = combineReducers({
  allRooms: allRoomReducer,
  roomDetails: roomDetailsReducer,
  auth: authReducer,
  user: userReducer,
  forgotPassword: forgotPasswordReducer,
  loadUser: loadUserReducer,
  checkBooking: checkReducer,
});
