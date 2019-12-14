import * as VideoAPIUtil from '../util/video_api_util';

export const RECEIVE_ALL_VIDEOS = "RECEIVE_ALL_VIDEOS";
export const RECEIVE_SINGLE_VIDEO = "RECEIVE_SINGLE_VIDEO";
export const CREATE_VIDEO = "CREATE_VIDEO";
export const UPDATE_VIDEO = "UPDATE_VIDEO";
export const DELETE_VIDEO = "DELETE_VIDEO";
export const RECEIVE_VIDEO_ERRORS = "RECEIVE_VIDEO_ERRORS";

const receiveAllVideos = (payload) => ({
  type: RECEIVE_ALL_VIDEOS,
  payload
});

const receiveSingleVideo = payload => ({
  type: RECEIVE_SINGLE_VIDEO,
  payload
});

const receiveVideoErrors = errors => ({
  type: RECEIVE_VIDEO_ERRORS,
  errors
});

export const fetchAllVideos = () => dispatch => {
  return VideoAPIUtil.fetchAllVideos()
    .then(payload => dispatch(receiveAllVideos(payload)));
};

export const fetchSingleVideo = (videoId) => dispatch => {
  return VideoAPIUtil.fetchSingleVideo(videoId)
    .then(payload => dispatch(receiveSingleVideo(payload)));
};