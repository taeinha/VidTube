import React from 'react';

import { Route, Switch } from 'react-router-dom';
import NavBarContainer from './navbar/nav_bar_container';
import VideoIndexContainer from './videos/video_index_container';
import VideoShowContainer from './videos/video_show_container';
import Modal from './modal/modal_container';
import SearchIndexContainer from './search/search_index_container';
import Load from './load/load_container';

const App = (props) => {
  return (
    <div className="app-container">
      <Modal />
      <Load />
      <NavBarContainer />
      <div className="nav-bar-hidden-div"></div>
      <Switch>
        <Route exact path="/" component={VideoIndexContainer} />
        <Route exact path="/videos/:videoId" component={VideoShowContainer} />
        <Route path="/results" component={SearchIndexContainer} />
      </Switch>
    </div>
  )
}

export default App;