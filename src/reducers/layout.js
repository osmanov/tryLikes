import * as actionTypes from '../constants/actionTypes';

const INITIAL_STATE = {
  isLike: false
};

export function layout(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.TOGGLE_LIKE:
      const isLike=action.value;
      return {
        ...state,
        isLike
      };

    default:
      return state;
  }
}