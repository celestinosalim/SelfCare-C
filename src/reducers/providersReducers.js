import * as types from '../actions/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case types.REQUEST_PROVIDERS:
      return action.providers;

    case types.ADD_PROVIDER:
      return [
        ...state,
        action.provider
      ]

    case types.UPDATE_PROVIDER:
      const index = state.findIndex(provider => provider.id === action.provider.id)
      return [
        ...state.slice(0, index), action.provider, ...state.slice(index + 1)
      ]

    case types.DELETE_PROVIDER:
      const providers = state.filter(provider => provider.id !== action.id);
      return providers

    default:
      return state;
  }
}
