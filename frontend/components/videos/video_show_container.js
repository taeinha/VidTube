import { connect } from 'react-redux';

import VideoShow from './video_show';
import { fetchSingleVideo } from '../../actions/video_actions';

const msp = (state, ownProps) => {
  const videoId = ownProps.match.params.videoId;
  const videoState = Object.assign({}, state.entities.videos);
  delete videoState[videoId];

  return {
    video: state.entities.videos[videoId],
    videos: Object.values(videoState),
    users: state.entities.users,
    currentUser: state.session.id
  };
};

const mdp = dispatch => ({
  fetchSingleVideo: (videoId) => dispatch(fetchSingleVideo(videoId))
});

export default connect(msp, mdp)(VideoShow);