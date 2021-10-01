import axios from "axios";
import absoluteUrl from "next-absolute-url";

import {
  ALL_ROOM_SUCCESS,
  ALL_ROOM_FAIL,
  CLEAR_ERRORS,
  ROOM_DETAILS_FAIL,
  ROOM_DETAILS_SUCCESS,
} from "../constants/roomConstant";

// get all rooms
export const getRooms =
  (req, currentPage = 1, location = "", guests, category) =>
  async (dispatch) => {
    try {
      // get the base origin path
      const { origin } = absoluteUrl(req);

      let baseLink = `${origin}/api/rooms?page=${currentPage}&location=${location}`;

      if (guests) {
        baseLink = baseLink.concat(`&guestCapacity=${guests}`);
      }

      if (category) {
        baseLink = baseLink.concat(`&category=${category}`);
      }

      const { data } = await axios.get(baseLink);

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

// GET ROOM DETAILS
export const getRoomDetails = (req, id) => async (dispatch) => {
  try {
    // get the base origin path
    const { origin } = absoluteUrl(req);

    const { data } = await axios.get(`${origin}/api/rooms/${id}`);

    dispatch({
      type: ROOM_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ROOM_DETAILS_FAIL,
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
