import { API_URL } from './apiUrl'
import * from './actionTypes'

//Action Creators
const authRequest = () => {
  return {
    type: AUTH_REQUEST,
  }
}

const authError = (errors) => {
  return {
    type: AUTH_ERROR,
    errors: errors
  }
}

const authSuccess = (user, token) => {
  return {
    type: AUTH_SUCCESS,
    user: user,
    token: token
  }
}
