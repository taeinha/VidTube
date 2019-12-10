import React from 'react';

import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBarContainer from './navbar/nav_bar_container';


const App = (props) => {
  return (
    <div className="app-container">
      <NavBarContainer />
    </div>
  )
}

export default App;