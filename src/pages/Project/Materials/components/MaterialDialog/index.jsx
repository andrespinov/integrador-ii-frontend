import { useFormik } from 'formik'
import React, { useCallback, useEffect, useMemo } from 'react'
import { Dialog, Input, Checkbox } from '../../../../../components'
import * as Yup from 'yup'
import { Grid } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { setMaterial } from '../../../../../redux/material/materialActions'

const validationSchema = Yup.object().shape({
  projectId: Yup.string().required(),
  description: Yup.string(),
  type: Yup.string().required(),
  amount: Yup.number().required(),
})

const MaterialDialog = ({ material, open, handleClose, projectId }) => {
  const dispatch = useDispatch()
  const { loadingSetMaterial } = useSelector(state => state.materialReducer)

  const onSubmit = useCallback((values) => {
    dispatch(setMaterial(values, handleClose))
  }, [dispatch, handleClose])

  
  const emptyMaterial = useMemo(() => ({
    projectId,
    description: '',
    type: '',
    amount: 0
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
    initialValues: material || emptyMaterial,
    onSubmit
  })

  useEffect(() => {
    resetForm(material || emptyMaterial)
    setValues(material || emptyMaterial)
  }, [setValues, resetForm, material, open, emptyMaterial])

  return (
    <Dialog
      open={open}
      handleClose={handleClose}
      handleAction={handleSubmit}
      title={`${material ? 'Editar' : 'Crear'} material`}
      actionText='Guardar'
      actionLoading={loadingSetMaterial}
    >
      <div className='form'>
        <Grid container spacing={1} alignItems="center">
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
              name='amount'
              label='Cantidad'
              value={values.amount}
              onChange={handleChange}
              error={Boolean(touched.amount && errors.amount)}
              errorMessage={errors.amount}
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
        </Grid>
      </div>
    </Dialog>
  )
}

export default MaterialDialog
