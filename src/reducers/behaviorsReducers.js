import * as types from '../actions/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case types.REQUEST_BEHAVIORS:
      return action.behaviors;

    default:
      return state;
  }
}
