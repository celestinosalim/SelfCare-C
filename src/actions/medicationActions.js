import axios from 'axios'
import { API_URL } from './apiUrl'
import * as types from './actionTypes'

// Action Creators
const setMedications = medications => {
  return {
    type: types.REQUEST_MEDICATIONS,
    medications
  }
}

const addMedication = medication => {
  return {
    type: types.ADD_MEDICATION,
    medication
  }
}

// Async Actions
export const getMedications = () => {
  return dispatch => {
    return fetch(`${API_URL}/medications`)
      .then(response => response.json())
      .then(medications => dispatch(setMedications(medications)))
      .catch(error => console.log(error));
  };
}

export const createMedications = medication => {
  return dispatch => {
    return fetch(`${API_URL}/medications`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({medication: medication})
    })
      .then(response => response.json())
      .then(medication => dispatch(addMedication(medication)))
      .catch(error => console.log(error))
  };
}
