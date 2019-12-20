import { connect } from 'react-redux';

import VideoIndex from './video_index';
import { fetchAllVideos } from '../../actions/video_actions';

const msp = state => {
  return {
    videos: Object.values(state.entities.videos),
    users: state.entities.users,
    sidebar: state.ui.sidebar
  };
};

const mdp = dispatch => ({
  fetchAllVideos: () => dispatch(fetchAllVideos())
});

export default connect(msp, mdp)(VideoIndex);