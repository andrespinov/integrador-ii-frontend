import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Topbar } from '../../components'
import Transactions from './Transactions'

const Project = () => {
  return (
    <div>
      <Topbar showMenu />
      <Switch>
        <Route
          path='/proyecto/:id/transacciones'
          component={Transactions}
        />
      </Switch>
    </div>
    
  )
}

export default Project
