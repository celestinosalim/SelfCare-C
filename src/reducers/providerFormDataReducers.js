import * as types from '../actions/actionTypes';

const initialState = {
  name: "",
  first_visit: "",
  address: "",
  phone: "",
  department: "",
  notes: ""
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_PROVIDER:
      return action.providerFormData;

    case types.RESET_FORM:
      return initialState;

    default:
      return state;
  }
}
