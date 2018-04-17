import * as types from '../actions/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case types.REQUEST_INSURANCES:
      return action.insurances;

    case types.ADD_INSURANCE:
      return [
        ...state,
        action.insurance
      ]

    case types.UPDATE_INSURANCE:
      const index = state.findIndex(insurance => insurance.id === action.insurance.id)
      return [
        ...state.slice(0, index), action.insurance, ...state.slice(index + 1)
      ]

    case types.DELETE_INSURANCE:
      const insurances = state.filter(insurance => insurance.id !== action.id);
      return insurances

    case types.RESET_FORM:
      return state;

    default:
      return state;
  }
}
