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

const destroyMedication = medication => {
  return {
    type: types.DELETE_MEDICATION,
    id: medication
  }
}

// Action Creators - FORM

const setSelectedMedication = medication => {
  return {
    type: types.UPDATE_MEDICATION,
    medication
  }
}

export const resetMedicationForm = () => {
  return {
    type: types.RESET_FORM
  }
}

// Async Actions
export const getMedications = () => {
  return (dispatch) => {
    return fetch(`${API_URL}/medications`)
      .then(response => response.json())
      .then(medications => {
        dispatch(setMedications(medications))
      }) //returns collection of medications
      .catch(error => console.log(error));
  };
}

export const createMedication = medication => {
  return (dispatch) => {
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

export const updateMedication = (medicationId, medication) => {
  return (dispatch) => {
    return fetch(`${API_URL}/medications/${medicationId}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({medication: medication})
    })
      .then(response => response.json())
      .then(medication => {
        dispatch(setSelectedMedication(medication))
        dispatch(resetMedicationForm())
      })
      .catch(error => console.log(error))
  };
}

export const deleteMedication = medicationId => {
  return (dispatch) => {
    return fetch(`${API_URL}/medications/${medicationId}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(medication => {
        dispatch(destroyMedication(medication))
      })
      .catch(error => console.log(error))
  };
}



const setLike = (medication) => {
  return {
    type: types.MAKE_LIKES,
    medication,
  }
}
export const updateLikes = (medicationId, medication) => {
  return (dispatch) => {
    return fetch(`${API_URL}/medications/${medicationId}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({medication: medication})
    })
      .then(response => response.json())
      .then(medication => {
        dispatch(setLike(medication))
      })
      .catch(error => console.log(error))
  };
}
