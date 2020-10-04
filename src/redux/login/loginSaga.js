import { call, put, takeEvery } from 'redux-saga/effects'
import { loginSuccess, loginFailure } from './loginActions'
import loginTypes from './loginTypes'
import * as services from '../../services/login'

function* login(action) {
  try {
    const data = yield call(services.login, action.payload)
    yield put(loginSuccess(data))
  } catch (error) {
    yield put(loginFailure(error))
  }
}

function* loginSaga() {
  yield takeEvery(loginTypes.LOGIN, login)
}

export default loginSaga
