import projectTypes from './projectTypes'

// Get projects
const getProjects = () => ({
  type: projectTypes.GET_PROJECTS
})

const getProjectsSuccess = (payload) => ({
  type: projectTypes.GET_PROJECTS_SUCCESS,
  payload
})

const getProjectsFailure = (payload) => ({
  type: projectTypes.GET_PROJECTS_FAILURE,
  payload
})

// Get project
const getProject = (payload, onFailure) => ({
  type: projectTypes.GET_PROJECT,
  payload,
  onFailure
})

const getProjectSuccess = (payload) => ({
  type: projectTypes.GET_PROJECT_SUCCESS,
  payload
})

const getProjectFailure = (payload) => ({
  type: projectTypes.GET_PROJECT_FAILURE,
  payload
})

// Set project
const setProject = (payload, callback) => ({
  type: projectTypes.SET_PROJECT,
  payload,
  callback
})

const setProjectSuccess = (payload) => ({
  type: projectTypes.SET_PROJECT_SUCCESS,
  payload
})

const setProjectFailure = (payload) => ({
  type: projectTypes.SET_PROJECT_FAILURE,
  payload
})

// Delete project
const deleteProject = (payload, callback) => ({
  type: projectTypes.DELETE_PROJECT,
  payload,
  callback
})

const deleteProjectSuccess = (payload) => ({
  type: projectTypes.DELETE_PROJECT_SUCCESS,
  payload
})

const deleteProjectFailure = (payload) => ({
  type: projectTypes.DELETE_PROJECT_FAILURE,
  payload
})

export {
  getProjects,
  getProjectsSuccess,
  getProjectsFailure,
  getProject,
  getProjectSuccess,
  getProjectFailure,
  setProject,
  setProjectSuccess,
  setProjectFailure,
  deleteProject,
  deleteProjectSuccess,
  deleteProjectFailure
}
