import {
  USER_REGISTER_FAIL,
  CLEAR_ERRORS,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  LOAD_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_RESET,
  UPDATE_PROFILE_SUCCESS,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_FAIL,
  FORGOT_PASSWORD_SUCCESS,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_FAIL,
  RESET_PASSWORD_SUCCESS,
  LOAD_TRAVELLER_REQUEST,
  LOAD_TRAVELLER_SUCCESS,
  LOAD_TRAVELLER_FAIL,
} from "../constants/userConstant";

// GET ALL THE TRAVELLER => USER THAT HAS BEEN REGISTERED
export const travellerReducer = (state = { user: null }, action) => {
  switch (action.type) {
    case LOAD_TRAVELLER_REQUEST:
      return {
        loading: true,
        message: "LOAD TRAVELLER",
      };

    case LOAD_TRAVELLER_SUCCESS:
      return {
        loading: false,
        user: action.payload,
      };

    case LOAD_TRAVELLER_FAIL:
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

// REGISTER NEW USER
export const authReducer = (state = { user: null }, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return {
        loading: true,
      };

    case USER_REGISTER_SUCCESS:
      return {
        loading: false,
        success: true,
      };

    case USER_REGISTER_FAIL:
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

//  LOAD USER
export const loadUserReducer = (
  state = { loading: true, user: null },
  action
) => {
  switch (action.type) {
    case LOAD_USER_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      };

    case LOAD_USER_SUCCESS:
      return {
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };

    case LOAD_USER_FAIL:
      return {
        loading: false,
        isAuthenticated: false,
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

// UPDATE USER CREDENTIAL
export const userReducer = (state = { user: null }, action) => {
  switch (action.type) {
    case UPDATE_PROFILE_REQUEST:
      return {
        loading: true,
      };

    case UPDATE_PROFILE_SUCCESS:
      return {
        loading: false,
        isUpdated: action.payload,
      };

    case UPDATE_PROFILE_RESET:
      return {
        loading: false,
        isUpdated: false,
      };

    case UPDATE_PROFILE_FAIL:
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

// FORGOT PASSWORD WORKFLOW
export const forgotPasswordReducer = (state = { user: null }, action) => {
  switch (action.type) {
    case FORGOT_PASSWORD_REQUEST:
    case RESET_PASSWORD_REQUEST:
      return {
        loading: true,
      };

    case FORGOT_PASSWORD_SUCCESS:
      return {
        loading: false,
        message: action.payload,
      };

    case RESET_PASSWORD_SUCCESS:
      return {
        loading: false,
        success: action.payload,
      };

    case FORGOT_PASSWORD_FAIL:
    case RESET_PASSWORD_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
