import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import AuthRoute from './AuthRoute'

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <AuthRoute path='/login'>
          <Login />
        </AuthRoute>
        <Route path='/'>
          <Redirect to='/login' />
        </Route>
      </Switch>
    </Router>
  )
}

export default AppRouter
