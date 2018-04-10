import * as types from '../actions/actionTypes';

const initialState = {
  name: "",
  address: "",
  phone: "",
  notes: ""
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_INSURANCE:
      return action.insuranceFormData;

    case types.RESET_FORM:
      return initialState;

    default:
      return state;
  }
}
