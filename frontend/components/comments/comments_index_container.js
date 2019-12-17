import { connect } from 'react-redux';

import CommentIndex from './comments_index';
import { fetchAllComments } from '../../actions/comment_actions';

const msp = state => {
  return {
    comments: Object.values(state.entities.comments),
    users: state.entities.users
  };
};

const mdp = dispatch => ({
  fetchAllComments: (videoId) => dispatch(fetchAllComments(videoId))
});

export default connect(msp, mdp)(CommentIndex);