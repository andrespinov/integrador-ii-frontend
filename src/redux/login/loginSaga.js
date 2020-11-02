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
      throw 'Wrong email or password.'
    }
  } catch (error) {
    yield put(loginFailure(error))
  }
}

function* loginSaga() {
  yield takeEvery(loginTypes.LOGIN, login)
}

export default loginSaga
