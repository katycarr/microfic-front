import { AsyncStorage } from 'react-native'

// async function getToken() {
//   try {
//     const value = await AsyncStorage.getItem('token');
//     if (value !== null ) {
//       console.log(value)
//     }
//   } catch (error) {
//     console.log(error)
//   }
// }

async function setToken(value) {
  try {
    await AsyncStorage.setItem('token', value);
  } catch (error) {
    console.log(error)
  }
}

export const getUser = (token) => {
  console.log('getting user')
  return (dispatch) => {
    fetch('http://localhost:3000/get_user', {
      headers: {
        "Authorization": token
      }
    })
    .then(res => res.json())
    .then(json => {
      if (json["error"]) {
        console.log(json)
      } else {
        console.log(json)
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
    fetch('http://localhost:3000/login', options)
      .then(res => res.json())
      .then(json => {
        setToken(json.token)
        dispatch({
          type: 'LOGIN_DONE',
          payload: json.user
        })
      })
  }
}
