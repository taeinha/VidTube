import { connect } from 'react-redux';
import VideoForm from './video_form';
import React from 'react';
import { fetchSingleVideo, updateVideo, deleteVideo } from '../../actions/video_actions';
import { hideModal } from '../../actions/modal_actions';

class EditVideoForm extends React.Component {

  render() {
    const { video, currentUser, formType, submitVideo, hideModal, removeVideo } = this.props;
    if (!video || !currentUser) return null;
    if (video.uploader_id !== currentUser) return null;
    return (
      <VideoForm 
        video={video}
        currentUser={currentUser}
        formType={formType}
        submitVideo={submitVideo}
        removeVideo={removeVideo}
        hideModal={hideModal}
      />
    );
  }
}

const msp = (state) => {
  return {
    video: state.entities.videos[state.ui.modal.currentVideo],
    currentUser: state.session.id,
    formType: "Edit video"
  };
};

const mdp = dispatch => ({
  requestVideo: (videoId) => dispatch(fetchSingleVideo(videoId)),
  submitVideo: (formData, videoId) => dispatch(updateVideo(formData, videoId)),
  removeVideo: (videoId) => dispatch(deleteVideo(videoId)),
  hideModal: () => dispatch(hideModal())
});

export default connect(msp, mdp)(EditVideoForm);