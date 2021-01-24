import { combineReducers } from 'redux'
import loginReducer from './login/loginReducer'
import authReducer from './auth/authReducer'
import projectReducer from './project/projectReducer'
import transactionReducer from './transaction/transactionReducer'
import materialReducer from './material/materialReducer'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
  loginReducer,
  authReducer,
  projectReducer,
  transactionReducer,
  materialReducer
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['authReducer']
}

export default persistReducer(persistConfig, rootReducer)
