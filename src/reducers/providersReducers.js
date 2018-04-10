import * as types from '../actions/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case types.REQUEST_PROVIDERS:
      return action.providers;

    case types.ADD_PROVIDER:
      return state.concat(action.provider);

    default:
      return state;
  }
}
