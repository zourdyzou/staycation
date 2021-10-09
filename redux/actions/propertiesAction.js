import axios from "axios";
import absoluteUrl from "next-absolute-url";

import {
  ALL_PROPERTIES_FAIL,
  ALL_PROPERTIES_SUCCESS,
  CLEAR_ERRORS,
  PROPERTIES_DETAILS_FAIL,
  PROPERTIES_DETAILS_SUCCESS,
} from "../constants/propertiesConstant";

export const getAllProperties = (req) => async (dispatch) => {
  try {
    const { origin } = absoluteUrl(req);

    const baseLink = `${origin}/api/properties`;

    const { data } = await axios.get(baseLink);

    console.log(data);

    dispatch({
      type: ALL_PROPERTIES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_PROPERTIES_FAIL,
      payload: `${error.response.data.message}, please contact our customer services`,
    });
  }
};

export const getPropertyDetails = (req, id) => async (dispatch) => {
  try {
    // get the base origin path
    const { origin } = absoluteUrl(req);

    const { data } = await axios.get(`${origin}/api/properties/${id}`);

    dispatch({
      type: PROPERTIES_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PROPERTIES_DETAILS_FAIL,
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
