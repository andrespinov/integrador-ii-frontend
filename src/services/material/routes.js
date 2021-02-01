export default {
  MATERIAL: ({ id, projectId }) => `/materials${id ? '/' + id : ''}${projectId ? '?projectId=' + projectId : ''}`
}