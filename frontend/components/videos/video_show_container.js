import { connect } from 'react-redux';

import VideoShow from './video_show';
import { fetchSingleVideo, fetchAllVideos } from '../../actions/video_actions';
import { showModal } from '../../actions/modal_actions';
import { createVideoLike, deleteVideoLike } from '../../actions/like_actions';
import { hideLoader, showLoader } from '../../actions/load_actions';

const msp = (state, ownProps) => {
  const videoId = ownProps.match.params.videoId;
  const videoState = Object.assign({}, state.entities.videos);
  delete videoState[videoId];

  return {
    video: state.entities.videos[videoId],
    videos: videoState,
    users: state.entities.users,
    currentUser: state.session.id,
    load: state.ui.load.show
  };
};

const mdp = dispatch => ({
  fetchSingleVideo: (videoId) => dispatch(fetchSingleVideo(videoId)),
  fetchAllVideos: () => dispatch(fetchAllVideos()),
  showModal: modal => dispatch(showModal(modal)),
  createVideoLike: like => dispatch(createVideoLike(like)),
  deleteVideoLike: videoId => dispatch(deleteVideoLike(videoId)),
  showLoader: load => dispatch(showLoader(load)),
  hideLoader: () => dispatch(hideLoader())
});

export default connect(msp, mdp)(VideoShow);