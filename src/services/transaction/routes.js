export default {
  TRANSACTIONS: ({ id, projectId }) => `/transactions?${id ? 'id=' + id + '&&': ''}${projectId ? 'projectId=' + projectId : ''}`
}