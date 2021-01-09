import { IconButton } from '@material-ui/core'
import { AddCircle, Edit, Delete, OpenInNew } from '@material-ui/icons'
import React, { useCallback, useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ConfirmationDialog, Table } from '../../components'
import { deleteProject, getProjects } from '../../redux/project/projectActions'
import ProjectDialog from './components/ProjectDialog'
import { ProjectsContainer, ProjectActions } from './styles'

const Projects = () => {
  const dispatch = useDispatch()
  const [dialogParams, setDialogParams] = useState({
    open: false,
    project: null
  })
  const [confirmDelete, setConfirmDelete] = useState()
  const { loadingProjects, loadingDeleteProject, projects } = useSelector(state => state.projectReducer)
  const tableColumns = [
    { name: 'ID', property: 'id' },
    { name: 'Nombre', property: 'name' },
    { name: 'Description', property: 'description' },
    { name: 'Propietario', property: 'owner.name' },
    { name: 'Dirección', property: 'address' },
    { name: 'Aciones', property: 'actions' }
  ]

  const handleDialogParams = (open, project) => {
    setDialogParams({ open, project })
  }

  const handleDeleteProject = useCallback((project) => {
    console.log(project)
    setConfirmDelete(project)
  }, [])

  const handleDeleteConfirmation = useCallback((confirm) => {
    const finishDelete = () => setConfirmDelete(null)
    if (confirm) {
      dispatch(deleteProject(confirmDelete?.id), finishDelete)
    } else finishDelete()
  }, [dispatch, confirmDelete])

  useEffect(() => {
    dispatch(getProjects())
  }, [dispatch])

  const customProperties = {
    actions: ({ item, key }) => (
      <ProjectActions key={key}>
        <IconButton color='primary' onClick={() => handleDialogParams(true, item)}>
          <Edit fontSize='small' />
        </IconButton>
        <IconButton color='primary' onClick={() => handleDeleteProject(item)}>
          <Delete fontSize='small' />
        </IconButton>
        <IconButton color='primary' onClick={() => {}}>
          <OpenInNew fontSize='small' />
        </IconButton>
      </ProjectActions>
    )
  }

  return (
    <ProjectsContainer>
      <div className='content'>
        <div className='header'>
          <h1>Proyectos</h1>
          <IconButton color='primary' onClick={() => handleDialogParams(true)}>
            <AddCircle fontSize='large' />
          </IconButton>
        </div>
        <Table
          rows={projects}
          columns={tableColumns}
          customProperties={customProperties}
          loading={loadingProjects}
        />
      </div>
      <ProjectDialog
        open={dialogParams.open}
        project={dialogParams.project}
        handleClose={() => handleDialogParams(false)}
      />
      <ConfirmationDialog
        open={Boolean(confirmDelete)}
        handleClose={handleDeleteConfirmation}
        title='Eliminar proyecto'
        description='Está seguro que desea eliminar el proyecto?'
        loading={loadingDeleteProject}
      />
    </ProjectsContainer>
  )
}

export default Projects
