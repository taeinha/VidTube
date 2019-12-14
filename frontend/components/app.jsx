import React from 'react';

import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBarContainer from './navbar/nav_bar_container';
import VideoIndexContainer from './videos/video_index_container';
import VideoShowContainer from './videos/video_show_container';

const App = (props) => {
  return (
    <div className="app-container">
      <NavBarContainer />
      <Switch>
        <Route exact path="/" component={VideoIndexContainer} />
        {/* Create Video */}
        <Route exact path="/videos/:videoId" component={VideoShowContainer} />
        {/* Edit Video */}
      </Switch>
    </div>
  )
}

export default App;