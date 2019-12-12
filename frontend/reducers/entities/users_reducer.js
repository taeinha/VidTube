import { RECEIVE_CURRENT_USER } from "../../actions/session_actions";
import { RECEIVE_ALL_VIDEOS } from "../../actions/video_actions";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.user.id]: action.user });
    case RECEIVE_ALL_VIDEOS:
      return Object.assign({}, state, action.payload.users);
    default:
      return state;
  }
};

export default usersReducer;