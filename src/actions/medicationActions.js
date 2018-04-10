import { API_URL } from './apiUrl'
import * as types from './actionTypes'

// Action Creators
const setMedications = medications => {
  return {
    type: types.REQUEST_MEDICATIONS,
    medications  //collection of medications
  }
}

const addMedication = medication => {
  return {
    type: types.ADD_MEDICATION,
    medication
  }
}

export const updateMedicationFormData = medicationFormData => {
  return {
    type: types.UPDATE_MEDICATION,
    medicationFormData
  }
}

export const resetMedicationForm = () => {
  return {
    type: types.RESET_FORM
  }
}

// Async Actions
export const getMedications = () => {
  return dispatch => {
    return fetch(`${API_URL}/medications`)
      .then(response => response.json())
      .then(medications => {
        dispatch(setMedications(medications))
      }) //returns collection of medications
      .catch(error => console.log(error));
  };
}

export const createMedication = medication => {
  return dispatch => {
    return fetch(`${API_URL}/medications`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({medication: medication})
    })
      .then(response => response.json())
      .then(medication => {
        dispatch(addMedication(medication))
        dispatch(resetMedicationForm())
      })
      .catch(error => console.log(error))
  };
}
