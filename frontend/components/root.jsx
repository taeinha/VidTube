import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from './app';
import SignupApp from '../components/session/signup_form_container';
import LoginApp from '../components/session/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <AuthRoute path="/login" component={LoginApp} />
          <AuthRoute path="/signup" component={SignupApp} />
          <Route path="/" component={App} />
        </Switch>
      </HashRouter>
    </Provider>
  )
}

export default Root;