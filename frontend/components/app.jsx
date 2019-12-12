import React from 'react';

import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBarContainer from './navbar/nav_bar_container';
import VideoIndexContainer from './videos/video_index_container';

const App = (props) => {
  return (
    <div className="app-container">
      <NavBarContainer />
      <VideoIndexContainer />
    </div>
  )
}

export default App;