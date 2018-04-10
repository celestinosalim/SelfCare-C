import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default (state = {medications: [],}, action) => {
  switch (action.type) {
    case types.REQUEST_MEDICATIONS:
      return action.medications;

    case types.ADD_MEDICATION:
      return state.concat(action.medication);

    default:
      return state;
  }
}
