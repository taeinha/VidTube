import { RECEIVE_ALL_VIDEOS, RECEIVE_SINGLE_VIDEO, REMOVE_VIDEO } from "../../actions/video_actions";
import { RECEIVE_LIKE_DATA } from "../../actions/like_actions";
import { merge } from 'lodash';
import { RECEIVE_ALL_COMMENTS, RECEIVE_SINGLE_COMMENT, REMOVE_COMMENT } from "../../actions/comment_actions";
const videosReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState, videos, video;
  // const { currentUser } = state.session.id;
  switch (action.type) {
    case RECEIVE_ALL_VIDEOS:
      return merge({}, state, action.payload.videos);
    case RECEIVE_SINGLE_VIDEO:
      videos = action.payload.videos;
      video = action.payload.video;
      newState = merge({}, state, videos);
      newState[video.id] = merge({}, newState[video.id], video);
      return newState;
    case RECEIVE_LIKE_DATA:
      video = action.payload.video;
      newState = merge({}, state);
      newState[video.id] = merge({}, newState[video.id], video);
      return newState;
    case RECEIVE_ALL_COMMENTS:
      video = action.payload.video;
      if (!video) return state;
      newState = merge({}, state);
      newState[video.id] = merge({}, newState[video.id], video);
      return newState;
    case RECEIVE_SINGLE_COMMENT:
      video = action.payload.video;
      newState = merge({}, state);
      newState[video.id] = merge({}, newState[video.id], video);
      return newState;
    case REMOVE_VIDEO:
      newState = merge({}, state);
      delete newState[action.videoId];
      return newState;
    case REMOVE_COMMENT:
      video = action.payload.video;
      newState = merge({}, state);
      newState[video.id] = merge({}, newState[video.id], video);
      return newState;
    default:
      return state;
  }
};

export default videosReducer;