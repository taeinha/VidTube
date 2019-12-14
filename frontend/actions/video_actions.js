import * as VideoAPIUtil from '../util/video_api_util';

export const RECEIVE_ALL_VIDEOS = "RECEIVE_ALL_VIDEOS";
export const RECEIVE_SINGLE_VIDEO = "RECEIVE_SINGLE_VIDEO";
export const REMOVE_VIDEO = "DELETE_VIDEO";
export const RECEIVE_VIDEO_ERRORS = "RECEIVE_VIDEO_ERRORS";

const receiveAllVideos = (payload) => ({
  type: RECEIVE_ALL_VIDEOS,
  payload
});

const receiveSingleVideo = payload => ({
  type: RECEIVE_SINGLE_VIDEO,
  payload
});

const removeVideo = videoId => ({
  type: REMOVE_VIDEO,
  videoId
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

export const createVideo = video => dispatch => {
  return VideoAPIUtil.createVideo(video)
    .then(payload => dispatch(receiveSingleVideo(payload)));
};

export const updateVideo = video => dispatch => {
  return VideoAPIUtil.updateVideo(video)
    .then(payload => dispatch(receiveSingleVideo(payload)));
};

export const deleteVideo = videoId => dispatch => {
  return VideoAPIUtil.deleteVideo(videoId)
    .then(() => dispatch(removeVideo(videoId)));
};