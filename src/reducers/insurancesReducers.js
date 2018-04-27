import * as types from '../actions/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case types.REQUEST_INSURANCES:
      return action.insurances;

    case types.ADD_INSURANCE:
      return state.concat(action.insurance)

    case types.UPDATE_INSURANCE:
      return state.map(insurance  => insurance.id === action.insurance.id ? action.insurance : insurance)
      
    case types.DELETE_INSURANCE:
      const insurances = state.filter(insurance => insurance.id !== action.id);
      return insurances

    case types.RESET_FORM:
      return state;

    default:
      return state;
  }
}
