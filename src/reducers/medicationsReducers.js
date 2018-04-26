import * as types from '../actions/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case types.REQUEST_MEDICATIONS:
      return action.medications;

    case types.ADD_MEDICATION:
      return state.concat(action.medication)

      //  [
      //   ...state,
      //   action.medication
      // ]

    case types.UPDATE_MEDICATION:
      const index = state.findIndex(medication => medication.id === action.medication.id)
      return [
        ...state.slice(0, index), action.medication, ...state.slice(index + 1)
      ]

    case types.DELETE_MEDICATION:
      const medications = state.filter(medication => medication.id !== action.id)
      return medications

    case types.RESET_FORM:
      return state;

    case types.MAKE_LIKES:
      return state;

    default:
      return state;
  }
}
