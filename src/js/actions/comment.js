import * as types from '../constants/action_types';

export function addComment(text) {
  return { type: types.ADD_COMMENT, text };
}
