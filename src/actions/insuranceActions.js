import { API_URL } from './apiUrl'
import * as types from './actionTypes'

// Action Creators
const setInsurances = insurances => {
  return {
    type: types.REQUEST_INSURANCES,
    insurances
  }
}

const addInsurance = insurance => {
  return {
    type: types.ADD_INSURANCE,
    insurance
  }
}

const destroyInsurance = insurance => {
  return {
    type: types.DELETE_INSURANCE,
    id: insurance
  }
}

// Action Creators - FORM
export const updateInsuranceFormData = insuranceFormData => {
  return {
    type: types.UPDATE_INSURANCE,
    insuranceFormData
  }
}

export const resetInsuranceForm = () => {
  return {
    type: types.RESET_FORM
  }
}

// Async Actions
export const getInsurances = () => {
  return dispatch => {
    return fetch(`${API_URL}/insurances`)
      .then(response => response.json())
      .then(insurances => {
        dispatch(setInsurances(insurances))
      })
      .catch(error => console.log(error));
  };
}

export const createInsurance = insurance => {
  return dispatch => {
    return fetch(`${API_URL}/insurances`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({insurance: insurance})
    })
      .then(response => response.json())
      .then(insurance => {
        dispatch(addInsurance(insurance))
        dispatch(resetInsuranceForm())
      })
      .catch(error => console.log(error))
  };
}

export const deleteInsurance = insuranceId => {
  return dispatch => {
    return fetch(`${API_URL}/insurances/${insuranceId}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({insurance: insuranceId})
    })
      .then(response => response.json())
      .then(insurance => {
        dispatch(destroyInsurance(insurance))
      })
      .catch(error => console.log(error))
  };
}
