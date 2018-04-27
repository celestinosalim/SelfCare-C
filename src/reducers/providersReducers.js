import * as types from '../actions/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case types.REQUEST_PROVIDERS:
      return action.providers;

    case types.ADD_PROVIDER:
      return state.concat(action.provider)

    case types.UPDATE_PROVIDER:
      return state.map(provider  => provider.id === action.provider.id ? action.provider : provider)

    case types.DELETE_PROVIDER:
      const providers = state.filter(provider => provider.id !== action.id);
      return providers

    default:
      return state;
  }
}
