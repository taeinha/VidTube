import * as LikeAPIUtil from '../util/like_api_util';

export const RECEIVE_LIKE_DATA = "RECEIVE_LIKE_DATA";

const receiveLikeData = payload => ({
  type: RECEIVE_LIKE_DATA,
  payload
});

export const createVideoLike = like => dispatch => {
  return LikeAPIUtil.createVideoLike(like)
    .then(payload => dispatch(receiveLikeData(payload)));
};

export const deleteVideoLike = videoId => dispatch => {
  return LikeAPIUtil.deleteVideoLike(videoId)
    .then(payload => dispatch(receiveLikeData(payload)));
};

export const createCommentLike = like => dispatch => {
  return LikeAPIUtil.createCommentLike(like)
    .then(payload => dispatch(receiveLikeData(payload)));
};

export const deleteCommentLike = commentId => dispatch => {
  return LikeAPIUtil.deleteCommentLike(commentId)
    .then(payload => dispatch(receiveLikeData(payload)));
};