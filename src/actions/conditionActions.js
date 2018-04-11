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
    return fetch(`${API_URL}/conditions`)
      .then(response => response.json())
      .then(conditions => dispatch(setConditions(conditions)))
      .catch(error => console.log(error));
  };
}

export const createCondition = condition => {
  return dispatch => {
    return fetch(`${API_URL}/conditions`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({condition: condition})
    })
      .then(response => response.json())
      .then(condition => dispatch(addCondition(condition)))
      .catch(error => console.log(error))
  };
}
