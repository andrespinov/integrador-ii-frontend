import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Topbar from '../../components/Topbar'
import Projects from '../Projects'

const Home = () => {
  return (
    <div>
      <Topbar />
      <Switch>
        <Route
          path='/proyectos'
          component={Projects}
        />
        <Route
          path='/proyecto/:id'
          component={Projects}
        />
        <Redirect to='/proyectos' />
      </Switch>
    </div>
    
  )
}

export default Home
