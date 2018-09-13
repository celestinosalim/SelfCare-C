import { API_URL } from './apiUrl'
import * as types from './actionTypes'

const providerLink = `${API_URL}/providers`

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
  return (dispatch) => {
    return fetch(`${providerLink}`, {
      headers: {
        "Authorization": `Bearer ${localStorage.token}`,
      },
    })
      .then(response => response.json())
      .then(providers => {
        dispatch(setProviders(providers))
      })
      .catch(error => console.log(error));
  };
}

export const createProvider = provider => {
  return (dispatch) => {
    return fetch(`${providerLink}`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${localStorage.token}`,
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
  return (dispatch) => {
    return fetch(`${providerLink}/${providerId}`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${localStorage.token}`,
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
  return (dispatch) => {
    return fetch(`${providerLink}/${providerId}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${localStorage.token}`,
        "Accept":"application/json",
        'Content-Type': 'application/json'
      }
    })
      .then(provider => {
        dispatch(destroyProvider(provider))
      })
      .catch(error => console.log(error))
  };
}
