import { useFormik } from 'formik'
import React, { useCallback, useEffect, useMemo } from 'react'
import { Dialog, Input, Checkbox } from '../../../../../components'
import * as Yup from 'yup'
import { Grid } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { setTransaction } from '../../../../../redux/transaction/transactionActions'

const validationSchema = Yup.object().shape({
  projectId: Yup.string().required(),
  description: Yup.string().required(),
  type: Yup.string().required(),
  value: Yup.number().required(),
  income: Yup.bool(),
  products: Yup.array()
})

const TransactionDialog = ({ transaction, open, handleClose, projectId }) => {
  const dispatch = useDispatch()
  const { loadingSetTransaction } = useSelector(state => state.transactionReducer)

  const onSubmit = useCallback((values) => {
    dispatch(setTransaction(values, handleClose))
  }, [dispatch])

  
  const emptyTransaction = useMemo(() => ({
    projectId,
    description: '',
    income: false,
    type: '',
    value: ''
  }), [projectId])

  const {
    setValues,
    resetForm,
    values,
    errors,
    touched,
    handleChange,
    handleSubmit
  } = useFormik({
    validationSchema,
    initialValues: transaction || emptyTransaction,
    onSubmit
  })

  useEffect(() => {
    resetForm(transaction || emptyTransaction)
    setValues(transaction || emptyTransaction)
  }, [setValues, resetForm, transaction, open])

  return (
    <Dialog
      open={open}
      handleClose={handleClose}
      handleAction={handleSubmit}
      title={`${transaction ? 'Editar' : 'Crear'} transacción`}
      actionText='Guardar'
      actionLoading={loadingSetTransaction}
    >
      <div className='form'>
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={12}>
            <Checkbox
              checked={values.income}
              onChange={handleChange}
              color="primary"
              label="Ingreso"
              name="income"
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              name='description'
              label='Descripción'
              value={values.description}
              onChange={handleChange}
              error={Boolean(touched.description && errors.description)}
              errorMessage={errors.description}
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              name='type'
              label='Tipo'
              value={values.type}
              onChange={handleChange}
              error={Boolean(touched.type && errors.type)}
              errorMessage={errors.type}
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              name='value'
              label='Valor'
              value={values.value}
              onChange={handleChange}
              error={Boolean(touched.value && errors.value)}
              errorMessage={errors.value}
            />
          </Grid>
        </Grid>
      </div>
    </Dialog>
  )
}

export default TransactionDialog
