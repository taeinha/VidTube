import { RECEIVE_ALL_COMMENTS, RECEIVE_SINGLE_COMMENT, REMOVE_COMMENT } from "../../actions/comment_actions";
import { merge } from 'lodash';
import { RECEIVE_LIKE_DATA } from "../../actions/like_actions";
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
    case RECEIVE_LIKE_DATA:
      comment = action.payload.comment;
      if (!comment) return state;
      newState = merge({}, state);
      newState[comment.id] = merge({}, newState[comment.id], comment);
      return newState;
    case REMOVE_COMMENT:
      newState = merge({}, state);
      delete newState[action.commentId];
      return newState;
    default:
      return state;
  }
};

export default commentsReducer;