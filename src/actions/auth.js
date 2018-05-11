import { AsyncStorage } from 'react-native'
import { baseUrl } from './base'

async function setToken(value) {
  try {
    await AsyncStorage.setItem('token', value);
  } catch (error) {
    console.log(error)
  }
}

export const logout = () => {
  AsyncStorage.removeItem('token')
  return {
    type: 'LOGOUT_DONE'
  }
}

export const getUser = (token) => {
  return (dispatch) => {
    fetch(baseUrl+'/get_user', {
      headers: {
        "Authorization": token
      }
    })
    .then(res => res.json())
    .then(json => {
      if (json["error"]) {
        console.log(json)
      } else {
        dispatch({
          type: 'GET_USER_DONE',
          payload: json
        })
      }
    })
  }
}

export const loginUser = ({username, password}) => {
  return (dispatch) => {
    dispatch({
      type: 'LOGIN_START'
    })
    let options = {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
        Accept:'application/json'
      },
      body: JSON.stringify({username, password})
    }
    fetch(baseUrl+'/login', options)
      .then(res => res.json())
      .then(json => {
        setToken(json.token)
        dispatch({
          type: 'GET_USER_DONE',
          payload: json.user
        })
      })
  }
}

export const signupUser = ({username, password}) => {
  return (dispatch) => {
    dispatch({
      type: 'SIGNUP_START'
    })
    let options = {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
        Accept:'application/json'
      },
      body: JSON.stringify({user: {username, password}})
    }
    fetch(baseUrl+'/signup', options)
      .then(res => res.json())
      .then(json => {
        setToken(json.token)
        dispatch({
          type: 'GET_USER_DONE',
          payload: json.user
        })
      })
  }
}
