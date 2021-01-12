import fetch from '../fetch'
import routes from './routes'

const getProjects = async () => {
  return fetch('get', routes.PROJECTS)
}

const createProject = async (payload) => {
  return fetch('post', routes.PROJECTS, payload)
}

const updateProject = async (payload) => {
  return fetch('put', routes.PROJECT(payload.id), payload)
}

const deleteProject = async (payload) => {
  return fetch('delete', routes.PROJECT(payload))
}

export {
  getProjects,
  createProject,
  updateProject,
  deleteProject
}