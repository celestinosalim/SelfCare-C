import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_MEDICATIONS:
      return {

      };
    case types.ADD_MEDICATION:
      return {

      };
    case types.REQUEST_BEHAVIORS:
      return {

      };
    case types.CREATE_BEHAVIORS:
      return {

      };
    default:
      return state;
  }
}
