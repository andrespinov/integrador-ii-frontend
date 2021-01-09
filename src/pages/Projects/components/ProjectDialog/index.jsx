import { useFormik } from 'formik'
import React, { useCallback, useEffect } from 'react'
import { Dialog, Input } from '../../../../components'
import * as Yup from 'yup'
import { Grid } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { setProject } from '../../../../redux/project/projectActions'

const emptyProject = {
  name: '',
  description: '',
  address: '',
  neighborhood: '',
  city: '',
  state: '',
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  description: Yup.string().required(),
  address: Yup.string(),
  neighborhood: Yup.string(),
  city: Yup.string(),
  state: Yup.string()
})

const ProjectDialog = ({ project, open, handleClose }) => {
  const dispatch = useDispatch()
  const { loadingSetProject } = useSelector(state => state.projectReducer)

  const onSubmit = useCallback((values) => {
    dispatch(setProject(values))
  }, [])

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
    initialValues: project || emptyProject,
    onSubmit
  })

  useEffect(() => {
    resetForm(project || emptyProject)
    setValues(project || emptyProject)
  }, [setValues, resetForm, project, open])

  return (
    <Dialog
      open={open}
      handleClose={handleClose}
      handleAction={handleSubmit}
      title={`${project ? 'Editar' : 'Crear'} proyecto`}
      actionText='Guardar'
      actionLoading={loadingSetProject}
    >
      <div className='form'>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Input
              name='name'
              label='Nombre'
              value={values.name}
              onChange={handleChange}
              error={Boolean(touched.name && errors.name)}
              errorMessage={errors.name}
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

export default ProjectDialog
