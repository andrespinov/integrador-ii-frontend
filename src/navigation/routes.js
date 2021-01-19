import Login from '../pages/Login'
import Projects from '../pages/Projects'
import Project from '../pages/Project'

const paths = {
  login: '/login',
  projects: '/proyectos',
  project: '/proyecto/:id'
}

const MAIN_PUBLIC_PATH = paths.login
const MAIN_PRIVATE_PATH = paths.projects

const routes = [
  {
    path: paths.login,
    component: Login,
    redirectTo: (user) => (user ? MAIN_PRIVATE_PATH : undefined),
    exact: true
  },
  {
    path: paths.projects,
    component: Projects,
    redirectTo: (user) => (user ? undefined : MAIN_PUBLIC_PATH),
    exact: true
  },
  {
    path: paths.project,
    component: Project,
    redirectTo: (user) => (user ? undefined : MAIN_PUBLIC_PATH),
  },
  {
    redirectTo: (user) => (user ? MAIN_PRIVATE_PATH : MAIN_PUBLIC_PATH),
  },

]

export default routes
