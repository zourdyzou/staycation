import { createStore, applyMiddleware } from "redux";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import logger from "redux-logger";
import thunk from "redux-thunk";

import { reducers } from "./reducers/reducer";

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }

  return applyMiddleware(...middleware);
};

const reducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return reducers(state, action);
  }
};

const initializeStore = () => {
  return createStore(reducer, bindMiddleware([thunk, logger]));
};

export const wrapper = createWrapper(initializeStore);
