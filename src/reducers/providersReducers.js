import * as types from '../actions/actionTypes';

let id= 0;

export default (state = [], action) => {
  switch (action.type) {
    case types.REQUEST_PROVIDERS:
      return action.providers;

    case types.ADD_PROVIDER:
      return [
        ...state,
        action.provider
      ]
      // id++;
      // const provider = Object.assign({}, action.provider, { id: id });
      // return state.concat(provider);

    case types.DELETE_PROVIDER:
      const providers = state.filter(provider => provider.id !== action.id);
      return providers

    default:
      return state;
  }
}
