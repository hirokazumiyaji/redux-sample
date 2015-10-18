"use strict";

import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import createLogger from "redux-logger";
import commentReducer from "../reducers/comment";

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    createLogger()
)(createStore);

export default function commentStore(initialState) {
  const store = createStoreWithMiddleware(commentReducer, initialState);
  return store;
}
