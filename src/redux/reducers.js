import { combineReducers } from 'redux'
import loginReducer from './login/loginReducer'
import authReducer from './auth/authReducer'

const reducers = combineReducers({
  loginReducer,
  authReducer
})

export default reducers
