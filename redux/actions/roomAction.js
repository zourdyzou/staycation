import axios from "axios";
import absoluteUrl from "next-absolute-url";

import {
  ALL_ROOM_SUCCESS,
  ALL_ROOM_FAIL,
  CLEAR_ERRORS,
} from "../constants/roomConstant";

// get all rooms
export const getRooms = (req) => async (dispatch) => {
  try {
    // get the base origin path
    const { origin } = absoluteUrl(req);

    const { data } = await axios.get(`${origin}/api/rooms`);

    dispatch({
      type: ALL_ROOM_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_ROOM_FAIL,
      payload: `${error.response.data.message}, please contact our customer services`,
    });
  }
};

// ? clear errors
export const clearError = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
