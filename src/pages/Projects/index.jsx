import { IconButton } from '@material-ui/core'
import { AddCircle } from '@material-ui/icons'
import React from 'react'
import { useState } from 'react'
import { Table } from '../../components'
import ProjectDialog from './components/ProjectDialog'
import { ProjectsContainer } from './styles'

const Projects = () => {
  const [openDialog, setOpenDialog] = useState(false)
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
    { name: 'Owner', property: 'owner.name' },
    { name: 'Address', property: 'address' }
  ]

  return (
    <ProjectsContainer>
      <div className='content'>
        <div className='header'>
          <h1>Proyectos</h1>
          <IconButton color='primary' onClick={() => setOpenDialog(true)}>
            <AddCircle fontSize='large' />
          </IconButton>
        </div>
        <Table rows={projects} columns={tableColumns} />
      </div>
      <ProjectDialog open={openDialog} handleClose={() => setOpenDialog(false)} />
    </ProjectsContainer>
  )
}

export default Projects
