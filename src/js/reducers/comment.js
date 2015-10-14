import { combineReducers } from 'redux';

import { ADD_COMMENT } from './constants/action_types';

function comments(state = [], action) {
  switch (action.type) {
  case ADD_COMMENT:
    return {
      text: action.text
    }, ...state];
  default:
    return state;
  }
}
