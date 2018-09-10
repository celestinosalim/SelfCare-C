import fetch from 'isomorphic-fetch';
import { API_URL } from './apiUrl'
import * as types from './actionTypes'

const authRequest = () => {
  return {
    type: types.AUTHENTICATION_REQUEST
  }
}

const authSuccess = (user, token) => {
  return {
    type: types.AUTHENTICATION_SUCCESS,
    user: user,
    token: token
  }
}

const authFailure = (errors) => {
  return {
    type: types.AUTHENTICATION_FAILURE,
    errors: errors
  }
}

export const logout = () => {
  return dispatch => {
    localStorage.removeItem();
    return dispatch({
      type: types.LOGOUT
    });
  }
}

export const signup = (user) => {
  const newUser = user
  return dispatch => {
    return fetch(`${API_URL}/users`, {
      'mode': 'no-cors',
      method: "POST",
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      body: JSON.stringify({user: user})
    })
      .then(response => response.json())
      .then(jresp => {
        dispatch(authenticate({
          name: newUser.name,
          email: newUser.email,
          password: newUser.password})
        );
      })
      .catch((errors) => {
        console.log(errors)
        dispatch(authFailure(errors))
      })
  };
}

export const authenticate = (credentials) => {
  return dispatch => {
    dispatch(authRequest())
    return fetch(`${API_URL}/user_token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({auth: credentials})
    })
      .then(res => res.json())
      .then((response) => {
          const token = response.jwt;
          localStorage.setItem('token', token);
          console.log(response)
          return getUser(credentials)
      })
      .then((user) => {
          dispatch(authSuccess(user, localStorage.token))
      })
      .catch((errors) => {
          console.log(errors);
          dispatch(authFailure(errors))
          localStorage.removeItem()
      })
  }
}

export const getUser = (credentials) => {
  const request = new Request(`${API_URL}/find_user`, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.token}`,
    }),
    body: JSON.stringify({user: credentials})
  })
  return fetch(request)
    .then(response => response.json())
    .then(userJson => {return userJson})
    .catch(error => {
      return error;
    });
}
