import { connect } from 'react-redux';
import CommentForm from './comment_form';
import { createComment, deleteComment } from '../../actions/comment_actions';

const msp = (state, ownProps) => {
  return {
    comment: {
      body: '',
      video_id: ownProps.video.id,
    },
    currentUser: state.session.id,
    formType: "Create",
    errors: state.errors.comment,
    video: ownProps.video
  };
};

const mdp = dispatch => ({
  submitComment: comment => dispatch(createComment(comment)),
});

export default connect(msp, mdp)(CommentForm);
