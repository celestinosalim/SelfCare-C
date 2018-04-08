import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function(state = initialState, action) {
  switch (action.type) {
    // case types.REQUEST_MEDICATIONS:
    //   return Object.assign({}, state)
    //   // return state
    case types.ADD_MEDICATION:
      return [action.payload.data, ...state];
    // case types.REQUEST_BEHAVIORS:
    //   return {
    //
    //   };
    // case types.CREATE_BEHAVIORS:
    //   return {
    //
    //   };
    default:
      return state;
  }
}
