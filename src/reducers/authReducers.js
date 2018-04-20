import * as types from '../actions/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case types.REQUEST_USER:
      return action.users;

    case types.ADD_USER:
      return [
        ...state,
        action.user
      ]

    case types.DELETE_USER:
      return

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
