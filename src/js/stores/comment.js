"use strict";

import { createStore } from "redux";
import { commentReducer } from "../reducers/comment";

export default function commentStore(initialState) {
  const store = createStore(commentReducer, initialState);
  return store;
}
