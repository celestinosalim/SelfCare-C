import * as types from '../actions/actionTypes';

const initialState = {
  id: "",
  name: "",
  dose: 0,
  first_dose: "",
  prescribed: "",
  notes: "",
  errors: {}
}

export default (state = initialState, action) => {
  switch (action.type) {

    case types.RESET_FORM:
      return initialState;

    default:
      return state;
  }
}
