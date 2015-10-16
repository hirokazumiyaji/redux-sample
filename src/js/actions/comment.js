import fetch from "isomorphic-fetch";
import * as types from "../constants/ActionTypes";

export function addComment(comment) {
  return {
    type: types.ADD_COMMENT,
    comment: comment
  };
}

export function request() {
  return {
    type: types.REQUEST_COMMENT
  };
}

export function receiveComments(json) {
  return {
    type: types.RECEIVE_COMMENT,
    comments: json.comments
  };
}

export function postComment(comment) {
  return dispatch => {
    dispatch(addComment(comment));
    dispatch(request());
    return fetch(
      "/comments",
      {
        method: "POST",
        body: JSON.stringify(comment)
      })
      .then(response => {
        return response.json();
      })
      .then(json => dispatch(receiveComments(json)));
}

export function fetchComments() {
  return dispatch => {
    dispatch(request());
    return fetch("/comments")
      .then(response => {
        return response.json()
      })
      .then(json => dispatch(receiveComments(json)));
  };
}
