import { call, all } from 'redux-saga/effects'
import loginSaga from './login/loginSaga'
import projectSaga from './project/projectSaga'

export default function * sagas () {
  yield all([
    call(loginSaga),
    call(projectSaga)
  ])
}
