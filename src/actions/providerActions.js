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

const destroyProvider = provider => {
  return {
    type: types.DELETE_PROVIDER,
    id: provider
  }
}

// Action Creators - FORM
export const setSelectedProvider = provider => {
  return {
    type: types.UPDATE_PROVIDER,
    provider
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

export const updateProvider = (providerId, provider) => {
  return dispatch => {
    return fetch(`${API_URL}/providers/${providerId}`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({provider: provider})
    })
      .then(response => response.json())
      .then(provider => {
        dispatch(setSelectedProvider(provider))
        dispatch(resetProviderForm())
      })
      .catch(error => console.log(error))
  };
}

export const deleteProvider = providerId => {
  return dispatch => {
    return fetch(`${API_URL}/providers/${providerId}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({provider: providerId})
    })
      .then(response => response.json())
      .then(provider => {
        dispatch(destroyProvider(provider))
      })
      .catch(error => console.log(error))
  };
}
