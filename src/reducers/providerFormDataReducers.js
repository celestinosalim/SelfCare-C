import * as types from '../actions/actionTypes';

const initialState = {
  id: "",
  name: "",
  first_visit: "",
  address: "",
  phone: "",
  department_id: "",
  notes: ""
}

export default (state = initialState, action) => {
  switch (action.type) {

    case types.RESET_FORM:
      return initialState;

    default:
      return state;
  }
}
