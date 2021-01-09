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
  setProject,
  setProjectSuccess,
  setProjectFailure,
  deleteProject,
  deleteProjectSuccess,
  deleteProjectFailure
}
