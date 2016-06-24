import * as actionTypes from '../constants/actionTypes';

export function toggleLike(value) {
  return {
    type: actionTypes.TOGGLE_LIKE,
    value
  };
}