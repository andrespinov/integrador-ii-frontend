import { combineReducers } from 'redux'
import loginReducer from './login/loginReducer'
import authReducer from './auth/authReducer'
import projectReducer from './project/projectReducer'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
  loginReducer,
  authReducer,
  projectReducer
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['authReducer']
}

export default persistReducer(persistConfig, rootReducer)
