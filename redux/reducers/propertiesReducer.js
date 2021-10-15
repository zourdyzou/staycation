import { CLEAR_ERRORS } from "../constants/bookingConstant";

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
