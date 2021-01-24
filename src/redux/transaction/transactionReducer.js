import transactionTypes from './transactionTypes'

const initialState = {
  transactions: [],
  loadingTransactions: false,
  transactionsError: '',
  loadingSetTransaction: false,
  setTransactionError: '',
  loadingDeleteTransaction: false,
  deleteTransactionError: ''
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    // Get transactions
    case transactionTypes.GET_TRANSACTIONS:
      return {
        ...state,
        transactions: [],
        loadingTransactions: true,
        transactionsError: ''
      }
    case transactionTypes.GET_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        transactions: payload,
        loadingTransactions: false,
        transactionsError: ''
      }
    case transactionTypes.GET_TRANSACTIONS_FAILURE:
      return {
        ...state,
        loadingTransactions: false,
        transactionsError: payload,
        transactions: [
          {
            id: '1',
            name: 'Transaction 1',
            description: 'This is the first transaction',
            owner: {
              name: 'Andrés Pino'
            },
            address: 'Cra 84A #39-43'
          }
        ]
      }
    
    // Set transaction
    case transactionTypes.SET_TRANSACTION:
      return {
        ...state,
        loadingSetTransaction: true,
        setTransactionError: ''
      }
    case transactionTypes.SET_TRANSACTION_SUCCESS: {
      const transactionIndex = state.transactions.findIndex(({ _id }) => _id === payload._id)
      const transactions = transactionIndex === -1 ? [
        payload,
        ...state.transactions
      ] : state.transactions.map((transaction, index) => index === transactionIndex ? payload : transaction)

      return {
        ...state,
        transactions,
        loadingSetTransaction: false,
        setTransactionError: ''
      }
    }
    case transactionTypes.SET_TRANSACTION_FAILURE:
      return {
        ...state,
        loadingSetTransaction: false,
        setTransactionError: payload
      }

    // Delete transaction
    case transactionTypes.DELETE_TRANSACTION:
      return {
        ...state,
        loadingDeleteTransaction: true,
        deleteTransactionError: ''
      }
    case transactionTypes.DELETE_TRANSACTION_SUCCESS: {
      const transactions = state.transactions.filter(transaction => transaction._id !== payload)

      return {
        ...state,
        transactions,
        loadingDeleteTransaction: false,
        deleteTransactionError: ''
      }
    }
    case transactionTypes.DELETE_TRANSACTION_FAILURE:
      return {
        ...state,
        loadingDeleteTransaction: false,
        deleteTransactionError: payload
      }
    default:
      return state;
  }
}

