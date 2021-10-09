import {
  ALL_PROPERTIES_FAIL,
  ALL_PROPERTIES_SUCCESS,
  CLEAR_ERRORS,
  PROPERTIES_DETAILS_FAIL,
  PROPERTIES_DETAILS_SUCCESS,
} from "../constants/propertiesConstant";

export const getPropertiesReducer = (state = { properties: [] }, action) => {
  switch (action.type) {
    case ALL_PROPERTIES_SUCCESS:
      return {
        loading: false,
        properties: action.payload,
      };

    case ALL_PROPERTIES_FAIL:
      return {
        loading: false,
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

export const propertiesDetailReducer = (state = { property: {} }, action) => {
  switch (action.payload) {
    case PROPERTIES_DETAILS_SUCCESS:
      return {
        loading: false,
        property: action.payload,
        message: "DETAILS ABOUT PROPERTY",
      };

    case PROPERTIES_DETAILS_FAIL:
      return {
        loading: false,
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
