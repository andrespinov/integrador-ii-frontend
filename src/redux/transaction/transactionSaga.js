import { call, put, takeEvery } from 'redux-saga/effects'
import * as actions from './transactionActions'
import transactionTypes from './transactionTypes'
import * as service from '../../services/transaction'

function* getTransactions() {
  try {
    const { data } = yield call(service.getTransactions)
    yield put(actions.getTransactionsSuccess(data))
  } catch (error) {
    yield put(actions.getTransactionsFailure(error))
  }
}

function* setTransaction({ payload, callback }) {
  try {
    const { data } = yield call(service[payload._id ? 'updateTransaction' : 'createTransaction'], payload)
    yield put(actions.setTransactionSuccess(data))
    if(callback) callback()
  } catch (error) {
    yield put(actions.setTransactionFailure(error))
  }
}

function* deleteTransaction({ payload, callback }) {
  try {
    yield call(service.deleteTransaction, payload)
    yield put(actions.deleteTransactionSuccess(payload))
    if(callback) callback()
  } catch (error) {
    yield put(actions.deleteTransactionFailure(error))
  }
}

function* transactionSaga() {
  yield takeEvery(transactionTypes.GET_TRANSACTIONS, getTransactions)
  yield takeEvery(transactionTypes.SET_TRANSACTION, setTransaction)
  yield takeEvery(transactionTypes.DELETE_TRANSACTION, deleteTransaction)
}

export default transactionSaga
