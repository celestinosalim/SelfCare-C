import * as types from '../actions/actionTypes';

const initialState = {
  isAuthenticated: false,
  currentUser: {}, //the payload that was serialized within the token
  token: null,
  errors: [] //contains an error message following a failed “knock”
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.AUTH_REQUEST:
      return {
        ...state,
        isAuthenticated: false,
      };
    case types.AUTH_ERROR:
      return {
        isAuthenticated: false,
        currentUser: {}, //user can't be found
        token: null, //token wasn't confirmed;
        errors: action.errors || [] //show the errors
      };
    case types.AUTH_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        currentUser: action.user, //user is found
        token: action.token //token associated with user is confirmed
      };
    case types.LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        currentUser: {}, //user is removed from currentUser
        token: null //token expires/removed
      };
    default:
      return state;
  }
}
