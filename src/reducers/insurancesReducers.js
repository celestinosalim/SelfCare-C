import * as types from '../actions/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case types.REQUEST_INSURANCES:
      return action.insurances;

    case types.ADD_INSURANCE:
      return state.concat(action.insurance);

    default:
      return state;
  }
}
