import { API_URL } from './apiUrl'
import * from './actionTypes'

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
