import { API_URL } from './apiUrl'
import * as types from './actionTypes'

// Action Creators
const setBehaviors = behaviors => {
  return {
    type: types.REQUEST_BEHAVIORS,
    behaviors
  }
}

const addBehavior = behavior => {
  return {
    type: types.CREATE_BEHAVIOR,
    behavior
  }
}

export const updateBehaviorFormData = behaviorFormData => {
  return {
    type: types.UPDATE_BEHAVIOR,
    behaviorFormData
  }
}

export const getBehaviors = () => {
  return dispatch => {
    return fetch(`${API_URL}/behaviors`)
      .then(response => response.json())
      .then(behaviors => dispatch(setBehaviors(behaviors)))
      .catch(error => console.log(error));
  };
}

export const createBehavior = behavior => {
  return dispatch => {
    return fetch(`${API_URL}/behaviors`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({behavior: behavior})
    })
      .then(response => response.json())
      .then(behavior => dispatch(addBehavior(behavior)))
      .catch(error => console.log(error))
  };
}
