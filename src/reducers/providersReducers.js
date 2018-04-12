import * as types from '../actions/actionTypes';

let id= 0;

export default (state = [], action) => {
  switch (action.type) {
    case types.REQUEST_PROVIDERS:
      return action.providers;

    case types.ADD_PROVIDER:
      id++;
      const provider = Object.assign({}, action.provider, { id: id });
      return state.concat(provider);

    case types.DELETE_PROVIDER:
      return state.filter(provider => provider.id !== action.id);

    default:
      return state;
  }
}
