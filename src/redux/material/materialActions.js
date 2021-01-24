import materialTypes from './materialTypes'

// Get materials
const getMaterials = (payload) => ({
  type: materialTypes.GET_MATERIALS,
  payload
})

const getMaterialsSuccess = (payload) => ({
  type: materialTypes.GET_MATERIALS_SUCCESS,
  payload
})

const getMaterialsFailure = (payload) => ({
  type: materialTypes.GET_MATERIALS_FAILURE,
  payload
})

// Set material
const setMaterial = (payload, callback) => ({
  type: materialTypes.SET_MATERIAL,
  payload,
  callback
})

const setMaterialSuccess = (payload) => ({
  type: materialTypes.SET_MATERIAL_SUCCESS,
  payload
})

const setMaterialFailure = (payload) => ({
  type: materialTypes.SET_MATERIAL_FAILURE,
  payload
})

// Delete material
const deleteMaterial = (payload, callback) => ({
  type: materialTypes.DELETE_MATERIAL,
  payload,
  callback
})

const deleteMaterialSuccess = (payload) => ({
  type: materialTypes.DELETE_MATERIAL_SUCCESS,
  payload
})

const deleteMaterialFailure = (payload) => ({
  type: materialTypes.DELETE_MATERIAL_FAILURE,
  payload
})

export {
  getMaterials,
  getMaterialsSuccess,
  getMaterialsFailure,
  setMaterial,
  setMaterialSuccess,
  setMaterialFailure,
  deleteMaterial,
  deleteMaterialSuccess,
  deleteMaterialFailure
}
