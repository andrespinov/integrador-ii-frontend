import projectTypes from './projectTypes'

const initialState = {
  projects: [],
  loadingProjects: false,
  projectsError: '',
  loadingSetProject: false,
  setProjectError: '',
  loadingDeleteProject: false,
  deleteProjectError: ''
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    // Get projects
    case projectTypes.GET_PROJECTS:
      return {
        ...state,
        projects: [],
        loadingProjects: true,
        projectsError: ''
      }
    case projectTypes.GET_PROJECTS_SUCCESS:
      return {
        ...state,
        projects: payload,
        loadingProjects: false,
        projectsError: ''
      }
    case projectTypes.GET_PROJECTS_FAILURE:
      return {
        ...state,
        loadingProjects: false,
        projectsError: payload,
        projects: [
          {
            id: '1',
            name: 'Project 1',
            description: 'This is the first project',
            owner: {
              name: 'Andrés Pino'
            },
            address: 'Cra 84A #39-43'
          }
        ]
      }
    
    // Set project
    case projectTypes.SET_PROJECT:
      return {
        ...state,
        loadingSetProject: true,
        setProjectError: ''
      }
    case projectTypes.SET_PROJECT_SUCCESS: {
      const projectIndex = state.projects.findIndex(({ _id }) => _id === payload._id)
      const projects = projectIndex === -1 ? [
        payload,
        ...state.projects
      ] : state.projects.map((project, index) => index === projectIndex ? payload : project)

      return {
        ...state,
        projects,
        loadingSetProject: false,
        setProjectError: ''
      }
    }
    case projectTypes.SET_PROJECT_FAILURE:
      return {
        ...state,
        loadingSetProject: false,
        setProjectError: payload
      }

    // Delete project
    case projectTypes.DELETE_PROJECT:
      return {
        ...state,
        loadingDeleteProject: true,
        deleteProjectError: ''
      }
    case projectTypes.DELETE_PROJECT_SUCCESS: {
      const projects = state.projects.filter(project => project._id !== payload)

      return {
        ...state,
        projects,
        loadingDeleteProject: false,
        deleteProjectError: ''
      }
    }
    case projectTypes.DELETE_PROJECT_FAILURE:
      return {
        ...state,
        loadingDeleteProject: false,
        deleteProjectError: payload
      }
    default:
      return state;
  }
}

