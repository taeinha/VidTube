import React from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const Auth = ({ component: Component, path, loggedIn, exact }) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={props => (!loggedIn ? <Component {...props} /> : <Redirect to="/" />)}
    />
  )
}

const Protected = ({ component: Component, path, loggedIn, exact }) => {
  return (
    <Route 
      path={path}
      exact={exact}
      render={props => (!loggedIn ? <Redirect to='/signup' /> : <Component {...props} />)}
    />
  )
}

const msp = state => ({
  loggedIn: Boolean(state.session.id)
})

// Logged in users cannot see component, redirected instead
export const AuthRoute = withRouter(
  connect(msp, null)(Auth)
);

// Logged in users can see component, otherwise redirected
export const ProtectedRoute = withRouter(
  connect(msp, null)(Protected)
);