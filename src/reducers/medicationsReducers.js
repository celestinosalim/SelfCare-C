import * as types from '../actions/actionTypes';

let id = 0;

export default (state = [], action) => {
  switch (action.type) {
    case types.REQUEST_MEDICATIONS:
      return action.medications;

    case types.ADD_MEDICATION:
      id++;
      const medication = Object.assign({}, action.medication, { id: id });
      return state.concat(medication);

    // case types.UPDATE_MEDICATION:
    //   return state.concat(action.medication);

    case types.DELETE_MEDICATION:
      return state.filter(medication => medication.id !== action.id);

    default:
      return state;
  }
}
