import { API_URL } from './apiUrl'
import * as types from './actionTypes'

export function addMedications(){
  const request = fetch(`${API_URL}/medications`)
  return {
    type: types.ADD_MEDICATION,
    payload: request
  }
}
