import { RECEIVE_ALL_VIDEOS, RECEIVE_SINGLE_VIDEO } from "../../actions/video_actions";

const videosReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_ALL_VIDEOS:
      return Object.assign({}, state, action.payload.videos);
    default:
      return state;
  }
};

export default videosReducer;