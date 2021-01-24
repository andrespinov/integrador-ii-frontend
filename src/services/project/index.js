import fetch from '../fetch'
import routes from './routes'

const getProjects = async () => {
  return fetch('get', routes.PROJECT())
}

const getProject = async (id) => {
  return fetch('get', routes.PROJECT(id))
}

const createProject = async (payload) => {
  return fetch('post', routes.PROJECT(), payload)
}

const updateProject = async (payload) => {
  return fetch('put', routes.PROJECT(payload._id), payload)
}

const deleteProject = async (id) => {
  return fetch('delete', routes.PROJECT(id))
}

export {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject
}