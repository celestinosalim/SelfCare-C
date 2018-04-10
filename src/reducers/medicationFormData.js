import * as types from '../actions/actionTypes';
import initialState from './initialState';

const initialState = {
  name: "",
  dose: "",
  prescribed: "",
  notes: ""
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_MEDICATION:
      return action.medicationFormData;

    case types.RESET_FORM:
      return initialState;

    default:
      return state;
  }
}
