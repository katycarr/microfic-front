import { combineReducers } from 'redux'
import { ficsReducer } from './fics'
import { authReducer } from './auth'

const rootReducer = combineReducers({
  ficsReducer,
  authReducer
})

export default rootReducer
