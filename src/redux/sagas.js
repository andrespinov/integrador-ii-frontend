import { call, all } from 'redux-saga/effects'
import loginSaga from './login/loginSaga'
import projectSaga from './project/projectSaga'
import transactionSaga from './transaction/transactionSaga'
import materialSaga from './material/materialSaga'

export default function * sagas () {
  yield all([
    call(loginSaga),
    call(projectSaga),
    call(transactionSaga),
    call(materialSaga)
  ])
}
