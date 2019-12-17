import { RECEIVE_ALL_VIDEOS, RECEIVE_SINGLE_VIDEO, REMOVE_VIDEO } from "../../actions/video_actions";
import { RECEIVE_LIKE_DATA } from "../../actions/like_actions";

const videosReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState, videos, video;
  switch (action.type) {
    case RECEIVE_ALL_VIDEOS:
      return Object.assign({}, state, action.payload.videos);
    case RECEIVE_SINGLE_VIDEO:
      videos = action.payload.videos;
      video = action.payload.video;
      newState = Object.assign({}, state, videos);
      newState[video.id] = Object.assign({}, newState[video.id], video);
      return newState;
    case RECEIVE_LIKE_DATA:
      video = action.payload.video;
      newState = Object.assign({}, state);
      newState[video.id] = Object.assign({}, newState[video.id], video);
      return newState;
    case REMOVE_VIDEO:
      newState = Object.assign({}, state);
      delete newState[action.videoId];
      return newState;
    default:
      return state;
  }
};

export default videosReducer;