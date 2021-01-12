import { call, put, takeEvery } from 'redux-saga/effects'
import { loginSuccess, loginFailure } from './loginActions'
import loginTypes from './loginTypes'
import * as services from '../../services/login'

function* login(action) {
  try {
    const { token } = yield call(services.login, action.payload)
    if (token) {
      yield put(loginSuccess(token))
    } else {
      throw 'Email o contraseña incorrectos.'
    }
  } catch (error) {
    yield put(loginFailure('Email o contraseña incorrectos.'))
  }
}

function* loginSaga() {
  yield takeEvery(loginTypes.LOGIN, login)
}

export default loginSaga
