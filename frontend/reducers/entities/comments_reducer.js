import { RECEIVE_ALL_COMMENTS, RECEIVE_SINGLE_COMMENT, REMOVE_COMMENT } from "../../actions/comment_actions";
import { merge } from 'lodash';
const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState, comment;

  switch(action.type) {
    case RECEIVE_ALL_COMMENTS:
      return merge({}, state, action.payload.comments);
    case RECEIVE_SINGLE_COMMENT:
      newState = merge({}, state);
      comment = action.payload.comment;
      newState[comment.id] = merge({}, newState[comment.id], comment);
      return newState;
    default:
      return state;
  }
};

export default commentsReducer;