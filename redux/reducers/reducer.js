import { combineReducers } from "redux";

import { allRoomReducer, roomDetailsReducer } from "./roomReducer";

export const reducers = combineReducers({
  allRooms: allRoomReducer,
  roomDetails: roomDetailsReducer,
});
