import { call, put, takeEvery } from 'redux-saga/effects'
import * as actions from './materialActions'
import materialTypes from './materialTypes'
import * as service from '../../services/material'

function* getMaterials({ payload }) {
  try {
    const materials = yield call(service.getMaterials, payload)
    yield put(actions.getMaterialsSuccess(materials))
  } catch (error) {
    yield put(actions.getMaterialsFailure(error))
  }
}

function* setMaterial({ payload, callback }) {
  try {
    const material = yield call(service[payload._id ? 'updateMaterial' : 'createMaterial'], payload)
    const newMaterial = material ? {
      ...material,
      ...payload
    } : payload
    yield put(actions.setMaterialSuccess(newMaterial))
    if(callback) callback()
  } catch (error) {
    yield put(actions.setMaterialFailure(error))
  }
}

function* deleteMaterial({ payload, callback }) {
  try {
    yield call(service.deleteMaterial, payload)
    yield put(actions.deleteMaterialSuccess(payload))
    if(callback) callback()
  } catch (error) {
    yield put(actions.deleteMaterialFailure(error))
  }
}

function* materialSaga() {
  yield takeEvery(materialTypes.GET_MATERIALS, getMaterials)
  yield takeEvery(materialTypes.SET_MATERIAL, setMaterial)
  yield takeEvery(materialTypes.DELETE_MATERIAL, deleteMaterial)
}

export default materialSaga
