import * as types from '../actions/actionTypes';

let id: 0;

export default (state = [], action) => {
  switch (action.type) {
    case types.REQUEST_INSURANCES:
      return action.insurances;

    case types.ADD_INSURANCE:
      id++;
      const insurance = Object.assign({}, action.insurance, { id: id });
      return state.concat(insurance);

    case types.DELETE_INSURANCE:
      return state.filter(insurance => insurance.id !== action.id);

    default:
      return state;
  }
}
