import { connect } from 'react-redux';

import VideoShow from './video_show';
import { fetchSingleVideo, fetchAllVideos } from '../../actions/video_actions';
import { showModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
  const videoId = ownProps.match.params.videoId;
  const videoState = Object.assign({}, state.entities.videos);
  delete videoState[videoId];

  return {
    video: state.entities.videos[videoId],
    videos: videoState,
    users: state.entities.users,
    currentUser: state.session.id
  };
};

const mdp = dispatch => ({
  fetchSingleVideo: (videoId) => dispatch(fetchSingleVideo(videoId)),
  fetchAllVideos: () => dispatch(fetchAllVideos()),
  showModal: modal => dispatch(showModal(modal))
});

export default connect(msp, mdp)(VideoShow);