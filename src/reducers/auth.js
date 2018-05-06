const initialState = {
  user: null
}

export function authReducer(state=initialState, action) {
  switch(action.type) {
    case 'LOGIN_DONE':
      return { user: action.payload}
    case 'LOGOUT':
      return { user: null }
    case 'GET_USER_DONE':
      return {user: action.payload}
    default:
      return state
  }
}
