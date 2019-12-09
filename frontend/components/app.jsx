import React from 'react';
import SignupFormContainer from '../components/session/signup_form_container';
import LoginFormContainer from '../components/session/login_form_container';
import { Route } from 'react-router-dom';

const App = (props) => {
  return (
    <div className="app-container">
      <h1>Welcome to VidTube!</h1>
      <Route path="/login" component={LoginFormContainer} />
      <Route path="/signup" component={SignupFormContainer} />
    </div>
  )
}

export default App;