import { RECEIVE_ALL_COMMENTS, RECEIVE_SINGLE_COMMENT, REMOVE_COMMENT } from "../../actions/comment_actions";

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState, comment;

  switch(action.type) {
    case RECEIVE_ALL_COMMENTS:
      return Object.assign({}, state, action.payload.comments);
    case RECEIVE_SINGLE_COMMENT:
      newState = Object.assign({}, state);
      comment = action.payload.comment;
      newState[comment.id] = comment;
      return newState;
    default:
      return state;
  }
};

export default commentsReducer;