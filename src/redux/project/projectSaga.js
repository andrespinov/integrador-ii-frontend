import { call, put, takeEvery } from 'redux-saga/effects'
import * as actions from './projectActions'
import projectTypes from './projectTypes'
import * as service from '../../services/project'

function* getProjects() {
  try {
    const projects = yield call(service.getProjects)
    yield put(actions.getProjectsSuccess(projects))
  } catch (error) {
    yield put(actions.getProjectsFailure(error))
  }
}

function* getProject({ payload, onFailure }) {
  try {
    const project = yield call(service.getProject, payload)
    yield put(actions.getProjectSuccess(project))
  } catch (error) {
    if(onFailure) onFailure()
    yield put(actions.getProjectFailure(error))
  }
}

function* setProject({ payload, callback }) {
  try {
    const project = yield call(service[payload._id ? 'updateProject' : 'createProject'], payload)
    yield put(actions.setProjectSuccess(project))
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
  yield takeEvery(projectTypes.GET_PROJECT, getProject)
  yield takeEvery(projectTypes.SET_PROJECT, setProject)
  yield takeEvery(projectTypes.DELETE_PROJECT, deleteProject)
}

export default projectSaga
