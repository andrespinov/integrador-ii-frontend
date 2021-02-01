import fetch from '../fetch'
import routes from './routes'

const getMaterials = async (projectId) => {
  return fetch('get', routes.MATERIAL({ projectId }))
}

const createMaterial = async (payload) => {
  return fetch('post', routes.MATERIAL({ projectId: payload.projectId }), payload)
}

const updateMaterial = async (payload) => {
  return fetch('put', routes.MATERIAL({ id: payload._id }), payload)
}

const deleteMaterial = async (payload) => {
  return fetch('delete', routes.MATERIAL({ id: payload }))
}

export {
  getMaterials,
  createMaterial,
  updateMaterial,
  deleteMaterial
}