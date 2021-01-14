import fetch from '../fetch'
import routes from './routes'

const getTransactions = async () => {
  return fetch('get', routes.TRANSACTIONS)
}

const createTransaction = async (payload) => {
  return fetch('post', routes.TRANSACTIONS, payload)
}

const updateTransaction = async (payload) => {
  return fetch('put', routes.TRANSACTION(payload._id), payload)
}

const deleteTransaction = async (payload) => {
  return fetch('delete', routes.TRANSACTION(payload))
}

export {
  getTransactions,
  createTransaction,
  updateTransaction,
  deleteTransaction
}