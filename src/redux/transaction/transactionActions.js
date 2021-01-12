import transactionTypes from './transactionTypes'

// Get transactions
const getTransactions = () => ({
  type: transactionTypes.GET_TRANSACTIONS
})

const getTransactionsSuccess = (payload) => ({
  type: transactionTypes.GET_TRANSACTIONS_SUCCESS,
  payload
})

const getTransactionsFailure = (payload) => ({
  type: transactionTypes.GET_TRANSACTIONS_FAILURE,
  payload
})

// Set transaction
const setTransaction = (payload, callback) => ({
  type: transactionTypes.SET_TRANSACTION,
  payload,
  callback
})

const setTransactionSuccess = (payload) => ({
  type: transactionTypes.SET_TRANSACTION_SUCCESS,
  payload
})

const setTransactionFailure = (payload) => ({
  type: transactionTypes.SET_TRANSACTION_FAILURE,
  payload
})

// Delete transaction
const deleteTransaction = (payload, callback) => ({
  type: transactionTypes.DELETE_TRANSACTION,
  payload,
  callback
})

const deleteTransactionSuccess = (payload) => ({
  type: transactionTypes.DELETE_TRANSACTION_SUCCESS,
  payload
})

const deleteTransactionFailure = (payload) => ({
  type: transactionTypes.DELETE_TRANSACTION_FAILURE,
  payload
})

export {
  getTransactions,
  getTransactionsSuccess,
  getTransactionsFailure,
  setTransaction,
  setTransactionSuccess,
  setTransactionFailure,
  deleteTransaction,
  deleteTransactionSuccess,
  deleteTransactionFailure
}
