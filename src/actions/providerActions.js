import { API_URL } from './apiUrl'
import * as types from './actionTypes'

// Action Creators
const setProviders = providers => {
  return {
    type: types.REQUEST_PROVIDERS,
    providers
  }
}

const addProvider = provider => {
  return {
    type: types.ADD_PROVIDER,
    provider
  }
}

// Action Creators - FORM
export const updateProviderFormData = providerFormData => {
  return {
    type: types.UPDATE_PROVIDER,
    providerFormData
  }
}

export const resetProviderForm = () => {
  return {
    type: types.RESET_FORM
  }
}

// Async Actions
export const getProviders = () => {
  return dispatch => {
    return fetch(`${API_URL}/providers`)
      .then(response => response.json())
      .then(providers => {
        dispatch(setProviders(providers))
      })
      .catch(error => console.log(error));
  };
}

export const createProvider = provider => {
  return dispatch => {
    return fetch(`${API_URL}/providers`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({provider: provider})
    })
      .then(response => response.json())
      .then(provider => {
        dispatch(addProvider(provider))
        dispatch(resetProviderForm())
      })
      .catch(error => console.log(error))
  };
}
