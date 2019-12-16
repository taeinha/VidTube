import { connect } from 'react-redux';
import VideoForm from './video_form';
import { createVideo } from '../../actions/video_actions';
import { hideModal } from '../../actions/modal_actions';
import { clearErrors } from '../../actions/error_actions';

const msp = (state) => ({
  video: {
    title: '',
    description: '',
    thumbnailFile: null,
    thumbnailUrl: null,
    videoFile: null,
    videoUrl: null
  },
  currentUser: state.session.id,
  formType: "Upload video",
  errors: state.errors.video
});

const mdp = dispatch => ({
  submitVideo: (formData) => dispatch(createVideo(formData)),
  hideModal: () => dispatch(hideModal()),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(msp, mdp)(VideoForm);