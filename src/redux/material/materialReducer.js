import materialTypes from './materialTypes'

const initialState = {
  materials: [],
  loadingMaterials: false,
  materialsError: '',
  loadingSetMaterial: false,
  setMaterialError: '',
  loadingDeleteMaterial: false,
  deleteMaterialError: ''
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    // Get materials
    case materialTypes.GET_MATERIALS:
      return {
        ...state,
        materials: [],
        loadingMaterials: true,
        materialsError: ''
      }
    case materialTypes.GET_MATERIALS_SUCCESS:
      return {
        ...state,
        materials: payload,
        loadingMaterials: false,
        materialsError: ''
      }
    case materialTypes.GET_MATERIALS_FAILURE:
      return {
        ...state,
        loadingMaterials: false,
        materialsError: payload,
        materials: []
      }
    
    // Set material
    case materialTypes.SET_MATERIAL:
      return {
        ...state,
        loadingSetMaterial: true,
        setMaterialError: ''
      }
    case materialTypes.SET_MATERIAL_SUCCESS: {
      const materialIndex = state.materials.findIndex(({ _id }) => _id === payload._id)
      const materials = materialIndex === -1 ? [
        payload,
        ...state.materials
      ] : state.materials.map((material, index) => index === materialIndex ? payload : material)

      return {
        ...state,
        materials,
        loadingSetMaterial: false,
        setMaterialError: ''
      }
    }
    case materialTypes.SET_MATERIAL_FAILURE:
      return {
        ...state,
        loadingSetMaterial: false,
        setMaterialError: payload
      }

    // Delete material
    case materialTypes.DELETE_MATERIAL:
      return {
        ...state,
        loadingDeleteMaterial: true,
        deleteMaterialError: ''
      }
    case materialTypes.DELETE_MATERIAL_SUCCESS: {
      const materials = state.materials.filter(material => material._id !== payload)

      return {
        ...state,
        materials,
        loadingDeleteMaterial: false,
        deleteMaterialError: ''
      }
    }
    case materialTypes.DELETE_MATERIAL_FAILURE:
      return {
        ...state,
        loadingDeleteMaterial: false,
        deleteMaterialError: payload
      }
    default:
      return state;
  }
}

