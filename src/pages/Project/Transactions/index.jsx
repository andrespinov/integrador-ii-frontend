import React, { useCallback, useEffect, useState } from 'react'
import { AddCircle, Edit, Delete } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { ConfirmationDialog, Table } from '../../../components'
import { deleteTransaction, getTransactions } from '../../../redux/transaction/transactionActions'
import TransactionDialog from './components/TransactionDialog'
import { TransactionsContainer, TransactionActions } from './styles'
import moment from 'moment'
import { StyledTableCell } from '../../../components/Table'

const Transactions = ({ projectId }) => {
  const dispatch = useDispatch()
  const [dialogParams, setDialogParams] = useState({
    open: false,
    transaction: null
  })
  const [confirmDelete, setConfirmDelete] = useState()
  const { loadingTransactions, loadingDeleteTransaction, transactions } = useSelector(state => state.transactionReducer)
  const tableColumns = [
    { name: 'Fecha', property: 'creationDate' },
    { name: 'Descripción', property: 'description' },
    { name: 'Tipo', property: 'type' },
    { name: 'Valor', property: 'value' },
    { name: 'Acciones', property: 'actions' }
  ]

  const handleDialogParams = (open, transaction) => {
    setDialogParams({ open, transaction })
  }

  const handleDeleteTransaction = useCallback((transaction) => {
    setConfirmDelete(transaction)
  }, [])

  const handleDeleteConfirmation = useCallback((confirm) => {
    const finishDelete = () => setConfirmDelete(null)
    if (confirm) {
      dispatch(deleteTransaction(confirmDelete?._id), finishDelete)
    } else finishDelete()
  }, [dispatch, confirmDelete])

  useEffect(() => {
    dispatch(getTransactions(projectId))
  }, [dispatch, projectId])

  const customProperties = {
    actions: ({ item, key }) => (
      <TransactionActions key={key}>
        <IconButton color='primary' onClick={() => handleDialogParams(true, item)}>
          <Edit fontSize='small' />
        </IconButton>
        <IconButton color='primary' onClick={() => handleDeleteTransaction(item)}>
          <Delete fontSize='small' />
        </IconButton>
      </TransactionActions>
    ),
    creationDate: ({ item, key }) => (
      <StyledTableCell key={key} align="center">{moment(item).format('DD MM YYYY')}</StyledTableCell>
    )
  }

  return (
    <div>
      <TransactionsContainer>
        <div className='content'>
          <div className='header'>
            <h1>Transacciones</h1>
            <IconButton color='primary' onClick={() => handleDialogParams(true)}>
              <AddCircle fontSize='large' />
            </IconButton>
          </div>
          <Table
            rows={transactions}
            columns={tableColumns}
            customProperties={customProperties}
            loading={loadingTransactions}
          />
        </div>
      </TransactionsContainer>
      <TransactionDialog
        open={dialogParams.open}
        transaction={dialogParams.transaction}
        handleClose={() => handleDialogParams(false)}
        projectId={projectId}
      />
      <ConfirmationDialog
        open={Boolean(confirmDelete)}
        handleClose={handleDeleteConfirmation}
        title='Eliminar transacción'
        description='Está seguro que desea eliminar la transacción?'
        loading={loadingDeleteTransaction}
      />
    </div>
  )
}

export default Transactions
