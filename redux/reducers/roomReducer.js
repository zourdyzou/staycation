import {
  ALL_ROOM_FAIL,
  ALL_ROOM_SUCCESS,
  CLEAR_ERRORS,
  ROOM_DETAILS_FAIL,
  ROOM_DETAILS_SUCCESS,
} from "../constants/roomConstant";

// GET ALL ROOM
export const allRoomReducer = (state = { rooms: [] }, action) => {
  switch (action.type) {
    case ALL_ROOM_SUCCESS:
      return {
        // roomsCount: action.payload.roomsCount,
        // resPerPage: action.payload.resPerPage,
        // filteredRoomsCount: action.payload.filteredRoomsCount,
        rooms: action.payload.rooms,
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

// GET ROOM DETAILS
export const roomDetailsReducer = (state = { room: {} }, action) => {
  switch (action.type) {
    case ROOM_DETAILS_SUCCESS:
      return {
        room: action.payload,
      };

    case ROOM_DETAILS_FAIL:
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
