import { API_URL } from './apiUrl'
import * from './actionTypes'


export const REQUEST_MEDICATIONS = "REQUEST_BEHAVIORS"
export const ADD_MEDICATION = "REQUEST_BEHAVIORS"



export const REQUEST_BEHAVIORS = "REQUEST_BEHAVIORS"
export const CREATE_BEHAVIORS = "CREATE_BEHAVIORS"

export function fetchMedications(){
  return (dispatch) => {
    dispatch({
      type: REQUEST_MEDICATIONS
    });
    return fetch(`${API_URL}/behaviors`)
      .then(res => resp.json())
      .then(medications => dispatch({
        type: ADD_MEDICATION
      }))
  };
}





export function fetchBehaviors(){
  return (dispatch) => {
    dispatch({
      type: REQUEST_BEHAVIORS
    });
    return fetch(`${API_URL}/behaviors`)
      .then(res => resp.json())
      .then(behaviors => dispatch({
        type: ADD_BEHAVIORS
      }))
  };
}

export function createBehaviors(){

  return {
    type: CREATE_BEHAVIORS,
    payload: request
  };
}
