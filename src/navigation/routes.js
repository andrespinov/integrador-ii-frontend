const { default: Home } = require("../pages/Home")
const { default: Login } = require("../pages/Login")

const paths = {
  home: '/',
  login: '/login',
}

const MAIN_PUBLIC_PATH = paths.login
const MAIN_PRIVATE_PATH = paths.home

const routes = [
  {
    path: paths.login,
    component: Login,
    redirectTo: (user) => (user ? MAIN_PRIVATE_PATH : undefined),
  },
  {
    path: paths.home,
    component: Home,
    redirectTo: (user) => (user ? undefined : MAIN_PUBLIC_PATH),
  }
]

export default routes
