import { call, all } from 'redux-saga/effects'
import loginSaga from './login/loginSaga'

export default function * sagas () {
  yield all([
    call(loginSaga)
  ])
}
