import { combineReducers } from "redux";

import { allRoomReducer } from "./roomReducer";

export const reducers = combineReducers({
  allRooms: allRoomReducer,
});
