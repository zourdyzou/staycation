import {
  ALL_ROOM_FAIL,
  ALL_ROOM_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/roomConstant";

export const allRoomReducer = (state = { rooms: [] }, action) => {
  switch (action.type) {
    case ALL_ROOM_SUCCESS:
      return {
        roomsCount: action.payload.roomsCount,
        resPerPage: action.payload.resPerPage,
        filteredRoomsCount: action.payload.filteredRoomsCount,
        rooms: action.payload,
      };

    case ALL_ROOM_FAIL:
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
