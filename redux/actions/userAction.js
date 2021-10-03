import axios from "axios";

// import absoluteUrl from "next-absolute-url";

import {
  USER_REGISTER_SUCCESS,
  USER_REGISTER_REQUEST,
  USER_REGISTER_FAIL,
  CLEAR_ERRORS,
  LOAD_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_FAIL,
  FORGOT_PASSWORD_SUCCESS,
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

    const { data } = await axios.post("/api/auth/register", userData, config);

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: `${error.response.data.message}, please contact our customer services`,
    });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });

    const { data } = await axios.get("/api/me");

    dispatch({
      type: LOAD_USER_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: LOAD_USER_FAIL,
      payload: `${error.response.data.message}, please contact our customer services`,
    });
  }
};

// UPDATE PROFILE => CREDENTIALS
export const updateProfile = (userData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PROFILE_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.put("/api/me/update", userData, config);

    dispatch({
      type: UPDATE_PROFILE_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PROFILE_FAIL,
      payload: `${error.response.data.message}, please contact our customer services`,
    });
  }
};

// FORGOT PASSWORD USERS => CREDENTIALS
export const forgotPassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: FORGOT_PASSWORD_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post("/api/password/forgot", email, config);

    dispatch({
      type: FORGOT_PASSWORD_SUCCESS,
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: FORGOT_PASSWORD_FAIL,
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
