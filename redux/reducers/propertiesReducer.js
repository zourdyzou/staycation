import {
  ALL_PROPERTIES_FAIL,
  ALL_PROPERTIES_SUCCESS,
  CLEAR_ERRORS,
  PROPERTIES_DETAILS_FAIL,
  PROPERTIES_DETAILS_SUCCESS,
} from "../constants/propertiesConstant";

import {
  PAGE_PAGINATION_NUMBER,
  PAGE_PAGINATION_FAIL,
} from "../constants/paginationConstant";

// PAGINATION
export const paginationReducer = (state = { page: 0 }, action) => {
  switch (action.type) {
    case PAGE_PAGINATION_NUMBER:
      return {
        loading: false,
        page: action.payload,
      };

    case PAGE_PAGINATION_FAIL:
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

export const propertiesDetailsReducer = (state = { property: {} }, action) => {
  switch (action.payload) {
    case PROPERTIES_DETAILS_SUCCESS:
      return {
        property: action.payload,
      };

    case PROPERTIES_DETAILS_FAIL:
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
