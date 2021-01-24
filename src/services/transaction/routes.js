export default {
  TRANSACTIONS: ({ id, projectId }) => `/transactions${id ? '/' + id : ''}${projectId ? '?projectId=' + projectId : ''}`
}