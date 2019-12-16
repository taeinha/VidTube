import { RECEIVE_ALL_VIDEOS, RECEIVE_SINGLE_VIDEO, REMOVE_VIDEO } from "../../actions/video_actions";

const videosReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_ALL_VIDEOS:
      return Object.assign({}, state, action.payload.videos);
    case RECEIVE_SINGLE_VIDEO:
      const { videos, video } = action.payload;
      newState = Object.assign({}, state, videos);
      newState[video.id] = video;
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