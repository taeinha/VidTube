import * as CommentAPIUtil from '../util/comment_api_util';

export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS";
export const RECEIVE_SINGLE_COMMENT = "RECEIVE_SINGLE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";

const receiveAllComments = comments => ({
  type: RECEIVE_ALL_COMMENTS,
  comments
});

const receiveSingleComment = comment => ({
  type: RECEIVE_ALL_COMMENTS,
  comment
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
  CommentAPIUtil.fetchAllComments(videoId)
    .then(comments => dispatch(receiveAllComments(comments)));
};

export const createComment = comment => dispatch => {
  CommentAPIUtil.createComment(comment)
    .then(
      payload => dispatch(receiveSingleComment(payload)),
      errors => dispatch(receiveCommentErrors(errors))
    );
};

export const updateComment = comment => dispatch => {
  CommentAPIUtil.updateComment(comment)
    .then(payload => dispatch(
      receiveSingleComment(payload)),
      errors => dispatch(receiveCommentErrors(errors))
    );
};

export const deleteComment = commentId => dispatch => {
  CommentAPIUtil.deleteComment(commentId)
    .then(() => dispatch(removeComment(commentId)));
};