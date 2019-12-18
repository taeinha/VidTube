import * as CommentAPIUtil from '../util/comment_api_util';

export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS";
export const RECEIVE_SINGLE_COMMENT = "RECEIVE_SINGLE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";

const receiveAllComments = payload => ({
  type: RECEIVE_ALL_COMMENTS,
  payload
});

const receiveSingleComment = payload => ({
  type: RECEIVE_SINGLE_COMMENT,
  payload
});

const removeComment = commentId => ({
  type: REMOVE_COMMENT,
  commentId
});

const receiveCommentErrors = ({ responseJSON }) => ({
  type: RECEIVE_COMMENT_ERRORS,
  messages: responseJSON
});

export const fetchAllComments = (videoId) => dispatch => {
  return CommentAPIUtil.fetchAllComments(videoId)
    .then(payload => dispatch(receiveAllComments(payload)));
};

export const createComment = comment => dispatch => {
  return CommentAPIUtil.createComment(comment)
    .then(
      payload => dispatch(receiveSingleComment(payload)),
      errors => dispatch(receiveCommentErrors(errors))
    );
};

export const updateComment = comment => dispatch => {
  return CommentAPIUtil.updateComment(comment)
    .then(
      payload => dispatch(receiveSingleComment(payload)),
      errors => dispatch(receiveCommentErrors(errors))
    );
};

export const deleteComment = commentId => dispatch => {
  return CommentAPIUtil.deleteComment(commentId)
    .then(() => dispatch(removeComment(commentId)));
};