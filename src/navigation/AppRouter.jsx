import React from 'react'
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom'
import RouteItem from './components/RouteItem'
import routes from './routes'
import useAuthState from '../hooks/useAuthState'

const AppRouter = () => {
  const { isAuthenticated } = useAuthState()

  return (
    <Router>
      <Switch>
        {routes.map(({redirectTo, path, ...config}) => (
          <RouteItem
            key={path}
            path={path}
            redirectTo={redirectTo?.(isAuthenticated)}
            {...config}
          />
        ))}
      </Switch>
    </Router>
  )
}

export default AppRouter
