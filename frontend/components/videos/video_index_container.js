import { connect } from 'react-redux';

import VideoIndex from './video_index';
import { fetchAllVideos } from '../../actions/video_actions';
import { showLoader, hideLoader } from '../../actions/load_actions';

const msp = state => {
  return {
    videos: Object.values(state.entities.videos),
    users: state.entities.users,
    sidebar: state.ui.sidebar,
    load: state.ui.load.show,
  };
};

const mdp = dispatch => ({
  fetchAllVideos: () => dispatch(fetchAllVideos()),
  showLoader: loader => dispatch(showLoader(loader)),
  hideLoader: () => dispatch(hideLoader())
});

export default connect(msp, mdp)(VideoIndex);