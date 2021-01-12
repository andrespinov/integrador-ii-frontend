import { call, put, takeEvery } from 'redux-saga/effects'
import * as actions from './projectActions'
import projectTypes from './projectTypes'
import * as service from '../../services/project'

function* getProjects() {
  try {
    const { data } = yield call(service.getProjects)
    yield put(actions.getProjectsSuccess(data))
  } catch (error) {
    yield put(actions.getProjectsFailure(error))
  }
}

function* setProject({ payload, callback }) {
  try {
    const { data } = yield call(service[payload.id ? 'updateProject' : 'createProject'], payload)
    yield put(actions.setProjectSuccess(data))
    if(callback) callback()
  } catch (error) {
    yield put(actions.setProjectFailure(error))
  }
}

function* deleteProject({ payload, callback }) {
  try {
    yield call(service.deleteProject, payload)
    yield put(actions.deleteProjectSuccess(payload))
    if(callback) callback()
  } catch (error) {
    yield put(actions.deleteProjectFailure(error))
  }
}

function* projectSaga() {
  yield takeEvery(projectTypes.GET_PROJECTS, getProjects)
  yield takeEvery(projectTypes.SET_PROJECT, setProject)
  yield takeEvery(projectTypes.DELETE_PROJECT, deleteProject)
}

export default projectSaga
