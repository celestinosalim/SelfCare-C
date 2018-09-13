import { API_URL } from './apiUrl'
import * as types from './actionTypes'

// Action Creators
const setConditions = conditions => {
  return {
    type: types.REQUEST_CONDITIONS,
    conditions
  }
}

const addCondition = condition => {
  return {
    type: types.CREATE_CONDITION,
    condition
  }
}

const deleteCondition = condition => {
  return {
    type: types.DELETE_CONDITION,
    condition
  }
}

export const updateConditionFormData = conditionFormData => {
  return {
    type: types.UPDATE_CONDITION,
    conditionFormData
  }
}

export const resetConditionForm = () => {
  return {
    type: types.RESET_FORM
  }
}

export const getConditions = () => {
  return dispatch => {
    return fetch(`${API_URL}/conditions`, {
      headers: {
        "Authorization": `Bearer ${localStorage.token}`,
      },
    })
      .then(response => response.json())
      .then(conditions => {
        dispatch(setConditions(conditions))
      )}
      .catch(error => console.log(error));
  };
}

export const createCondition = condition => {
  return dispatch => {
    return fetch(`${API_URL}/conditions`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${localStorage.token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({condition: condition})
    })
      .then(response => response.json())
      .then(condition => dispatch(addCondition(condition)))
      .catch(error => console.log(error))
  };
}

export const deleteCondition = conditionId => {
  return (dispatch) => {
    return fetch(`${API_URL}/conditions/${conditionId}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${localStorage.token}`,
        "Accept":"application/json",
        'Content-Type': 'application/json'
      }
    })
      .then(medication => {
        dispatch(destroyCondition(condition))
      })
      .catch(error => console.log(error))
  };
}
