import { IconButton } from '@material-ui/core'
import { AddCircle, Edit, Delete, OpenInNew } from '@material-ui/icons'
import React, { useCallback } from 'react'
import { useState } from 'react'
import { Table } from '../../components'
import ProjectDialog from './components/ProjectDialog'
import { ProjectsContainer, ProjectActions } from './styles'

const Projects = () => {
  const [dialogParams, setDialogParams] = useState({
    open: false,
    project: null
  })
  const projects = [
    {
      id: '1',
      name: 'Project 1',
      description: 'This is the first project',
      owner: {
        name: 'Andrés Pino'
      },
      address: 'Cra 84A #39-43'
    }
  ]
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

  const handleDeleteProject = useCallback((project) => {}, [])

  const customProperties = {
    actions: ({ item }) => (
      <ProjectActions>
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
        <Table rows={projects} columns={tableColumns} customProperties={customProperties} />
      </div>
      <ProjectDialog
        open={dialogParams.open}
        project={dialogParams.project}
        handleClose={() => handleDialogParams(false)}
      />
    </ProjectsContainer>
  )
}

export default Projects
