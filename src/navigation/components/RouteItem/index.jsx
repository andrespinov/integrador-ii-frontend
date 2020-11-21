import React from 'react'
import {Route, Redirect} from 'react-router-dom'

function RouteItem({redirectTo, ...config}) {
  return redirectTo ? <Redirect to={redirectTo} /> : <Route {...config} />
}

export default RouteItem
