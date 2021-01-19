import fetch from '../fetch'
import routes from './routes'

const getTransactions = async (projectId) => {
  return fetch('get', routes.TRANSACTIONS({ projectId }))
}

const createTransaction = async (payload) => {
  return fetch('post', routes.TRANSACTIONS({ projectId: payload.projectId }), payload)
}

const updateTransaction = async (payload) => {
  return fetch('put', routes.TRANSACTIONS({ id: payload._id }), payload)
}

const deleteTransaction = async (payload) => {
  return fetch('delete', routes.TRANSACTIONS({ id: payload }))
}

export {
  getTransactions,
  createTransaction,
  updateTransaction,
  deleteTransaction
}