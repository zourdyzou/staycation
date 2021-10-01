import axios from "axios";
// import absoluteUrl from "next-absolute-url";

import {
  USER_REGISTER_SUCCESS,
  USER_REGISTER_REQUEST,
  USER_REGISTER_FAIL,
  CLEAR_ERRORS,
} from "../constants/userConstant";

// REGISTER USER =>  AUTHENTICATION
export const registerUser = (userData) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    // eslint-disable-next-line no-unused-vars
    const { data } = await axios.post("/api/auth/register", userData, config);

    dispatch({
      type: USER_REGISTER_SUCCESS,
      // payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
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
