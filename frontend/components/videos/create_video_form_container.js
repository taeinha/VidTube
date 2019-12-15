import { connect } from 'react-redux';
import VideoForm from './video_form';
import { createVideo } from '../../actions/video_actions';
import { hideModal } from '../../actions/modal_actions';

const msp = (state) => ({
  video: {
    title: '',
    description: '',
  },
  currentUser: state.session.id,
  formType: "Upload video"
});

const mdp = dispatch => ({
  submitVideo: (video) => dispatch(createVideo(video)),
  hideModal: () => dispatch(hideModal())
});

export default connect(msp, mdp)(VideoForm);