import { useFormik } from 'formik'
import React, { useCallback, useEffect } from 'react'
import { Dialog, Input } from '../../../../../components'
import * as Yup from 'yup'
import { Grid } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { setTransaction } from '../../../../../redux/transaction/transactionActions'

const emptyProject = {
  projectId: '',
  date: new Date(),
  description: '',
  income: false,
  type: '',
  value: '',
  products: []
}

const validationSchema = Yup.object().shape({
  projectId: Yup.string().required(),
  date: Yup.date().required(),
  description: Yup.string().required(),
  type: Yup.string().required(),
  value: Yup.number().required(),
  income: Yup.bool(),
  products: Yup.array()
})

const TransactionDialog = ({ transaction, open, handleClose }) => {
  const dispatch = useDispatch()
  const { loadingSetTransaction } = useSelector(state => state.transactionReducer)

  const onSubmit = useCallback((values) => {
    dispatch(setTransaction(values))
  }, [dispatch])

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
    initialValues: transaction || emptyProject,
    onSubmit
  })

  useEffect(() => {
    resetForm(transaction || emptyProject)
    setValues(transaction || emptyProject)
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
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Date picker inline"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
            <Input
              name='date'
              label='Fecha'
              value={values.date}
              onChange={handleChange}
              error={Boolean(touched.date && errors.date)}
              errorMessage={errors.date}
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
          <Grid item xs={12}><h5>Location</h5></Grid>
          <Grid item xs={6}>
            <Input
              name='state'
              label='Departamento'
              value={values.state}
              onChange={handleChange}
              error={Boolean(touched.state && errors.state)}
              errorMessage={errors.state}
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              name='city'
              label='Ciudad'
              value={values.city}
              onChange={handleChange}
              error={Boolean(touched.city && errors.city)}
              errorMessage={errors.city}
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              name='address'
              label='Dirección'
              value={values.address}
              onChange={handleChange}
              error={Boolean(touched.address && errors.address)}
              errorMessage={errors.address}
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              name='neighborhood'
              label='Barrio'
              value={values.neighborhood}
              onChange={handleChange}
              error={Boolean(touched.neighborhood && errors.neighborhood)}
              errorMessage={errors.neighborhood}
            />
          </Grid>
        </Grid>
      </div>
    </Dialog>
  )
}

export default TransactionDialog
