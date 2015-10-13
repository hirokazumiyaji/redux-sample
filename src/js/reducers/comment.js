import { combineReducers } from 'redux';

import { ADD_COMMENT } from './actions';

function comments(state = [], action) {
  switch (action.type) {
  case ADD_COMMENT:
    return ...state, {
    }];
  default:
    return state;
  }
}

const CommentApp = combineReducers({
});

export default CommentApp;
