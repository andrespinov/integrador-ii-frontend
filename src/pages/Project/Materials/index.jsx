import React, { useCallback, useEffect, useState } from 'react'
import { AddCircle, Edit, Delete } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { ConfirmationDialog, Table } from '../../../components'
import { deleteMaterial, getMaterials } from '../../../redux/material/materialActions'
import MaterialDialog from './components/MaterialDialog'
import { MaterialsContainer, MaterialActions } from './styles'
import moment from 'moment'
import { StyledTableCell } from '../../../components/Table'

const Materials = ({ projectId }) => {
  const dispatch = useDispatch()
  const [dialogParams, setDialogParams] = useState({
    open: false,
    material: null
  })
  const [confirmDelete, setConfirmDelete] = useState()
  const { loadingMaterials, loadingDeleteMaterial, materials } = useSelector(state => state.materialReducer)
  const tableColumns = [
    { name: 'Fecha', property: 'creationDate' },
    { name: 'Descripción', property: 'description' },
    { name: 'Tipo', property: 'type' },
    { name: 'Cantidad', property: 'amount' },
    { name: 'Acciones', property: 'actions' }
  ]

  const handleDialogParams = (open, material) => {
    setDialogParams({ open, material })
  }

  const handleDeleteMaterial = useCallback((material) => {
    setConfirmDelete(material)
  }, [])

  const handleDeleteConfirmation = useCallback((confirm) => {
    const finishDelete = () => setConfirmDelete(null)
    if (confirm) {
      dispatch(deleteMaterial(confirmDelete?._id, finishDelete))
    } else finishDelete()
  }, [dispatch, confirmDelete])

  useEffect(() => {
    dispatch(getMaterials(projectId))
  }, [dispatch, projectId])

  const customProperties = {
    actions: ({ item, key }) => (
      <MaterialActions key={key}>
        <IconButton color='primary' onClick={() => handleDialogParams(true, item)}>
          <Edit fontSize='small' />
        </IconButton>
        <IconButton color='primary' onClick={() => handleDeleteMaterial(item)}>
          <Delete fontSize='small' />
        </IconButton>
      </MaterialActions>
    ),
    creationDate: ({ item, key }) => (
      <StyledTableCell key={key} align="center">{moment(item).format('DD MM YYYY')}</StyledTableCell>
    )
  }

  return (
    <div>
      <MaterialsContainer>
        <div className='content'>
          <div className='header'>
            <h1>Materiales</h1>
            <IconButton color='primary' onClick={() => handleDialogParams(true)}>
              <AddCircle fontSize='large' />
            </IconButton>
          </div>
          <Table
            rows={materials}
            columns={tableColumns}
            customProperties={customProperties}
            loading={loadingMaterials}
          />
        </div>
      </MaterialsContainer>
      <MaterialDialog
        open={dialogParams.open}
        material={dialogParams.material}
        handleClose={() => handleDialogParams(false)}
        projectId={projectId}
      />
      <ConfirmationDialog
        open={Boolean(confirmDelete)}
        handleClose={handleDeleteConfirmation}
        title='Eliminar transacción'
        description='Está seguro que desea eliminar la transacción?'
        loading={loadingDeleteMaterial}
      />
    </div>
  )
}

export default Materials
