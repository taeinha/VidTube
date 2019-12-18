import * as SearchAPIUtil from '../util/search_api_util';
import { RECEIVE_ALL_VIDEOS } from './video_actions';

// export const RECEIVE_SEARCH_VIDEOS = "RECEIVE_SEARCH_VIDEOS";

const receiveSearchVideos = payload => ({
  type: RECEIVE_ALL_VIDEOS,
  payload
});

export const fetchSearchVideos = (result) => dispatch => {
  return SearchAPIUtil.fetchSearchVideos(result)
    .then(payload => dispatch(receiveSearchVideos(payload)));
};