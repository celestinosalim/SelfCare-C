import { API_URL } from './apiUrl'
import * as types from './actionTypes'

export function fetchBehaviors(){
  return (dispatch) => {
    dispatch({
      type: types.REQUEST_BEHAVIORS
    });
    return fetch(`${API_URL}/behaviors`)
      .then(response => response.json())
      .then(behaviors => dispatch({
        type: types.ADD_BEHAVIORS,
        behaviors
      }))
  };
}

export function createBehaviors(){

  return {
    type: types.CREATE_BEHAVIORS,
    behaviors
  };
}
