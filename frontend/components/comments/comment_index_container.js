import { connect } from 'react-redux';

import CommentIndex from './comment_index';
import { fetchAllComments, createComment, deleteComment, updateComment } from '../../actions/comment_actions';
import { createCommentLike, deleteCommentLike } from '../../actions/like_actions';

const msp = state => {
  return {
    comments: Object.values(state.entities.comments),
    users: state.entities.users,
    currentUser: state.session.id
  };
};

const mdp = dispatch => ({
  fetchAllComments: (videoId) => dispatch(fetchAllComments(videoId)),
  createCommentLike: (like) => dispatch(createCommentLike(like)),
  deleteCommentLike: (commentId) => dispatch(deleteCommentLike(commentId)),
});

export default connect(msp, mdp)(CommentIndex);