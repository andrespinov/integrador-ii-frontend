import  React from  'react'
import { Route } from  'react-router-dom'
import PropTypes from 'prop-types'

const AuthRoute = ({ needAuthentication, ...props }) => {
	const isAuthenticated = false

	return  (needAuthentication && isAuthenticated) || (!needAuthentication && !isAuthenticated) ? (
		<Route {...props} />
	) : null // (<Redirect  to='/home'  />)
}

AuthRoute.propTypes = {
	needAuthentication: PropTypes.bool
}

export  default  AuthRoute
