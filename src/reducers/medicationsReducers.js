import * as types from '../actions/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case types.REQUEST_MEDICATIONS:
      return action.medications;

    case types.ADD_MEDICATION:
      return [
        ...state,
        action.medication
      ]

    case types.UPDATE_MEDICATION:
      const index = state.findIndex(medication => medication.id === action.medication.id)
      return [
        ...state.medications,
        action.medication
      ]

    case types.DELETE_MEDICATION:
      const medications = state.filter(medication => medication.id !== action.id)
      return medications

    case types.RESET_FORM:
      return state;

    default:
      return state;
  }
}
