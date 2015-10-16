import { combineReducers } from "redux";

import { ADD_COMMENT, REQUEST_COMMENT, RECEIVE_COMMENT } from "./constants/ActionTypes";

function comments(state = {isRequesting: false, comments: []}, action) {
  switch (action.type) {
  case ADD_COMMENT:
    return Object.assign(
      {},
      state,
      {
        comments: [...state["comments"], action.comment],
        isRequesting: false
      }
    );
  case REQUEST_COMMENT:
    return Object.assign(
      {},
      state,
      {
        isRequesting: true
      }
    );
  case RECEIVE_COMMENT:
    return Object.assign(
      {},
      state,
      {
        comments: [...state["comments"], action.comments],
        isRequesting: false
      }
    );
  default:
    return state;
  }
}

const commentReducer = combineReducers({
  comments
});

export default commentReducer;
