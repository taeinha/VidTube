import { RECEIVE_CURRENT_USER } from "../../actions/session_actions";
import { RECEIVE_ALL_VIDEOS, RECEIVE_SINGLE_VIDEO } from "../../actions/video_actions";
import { RECEIVE_LIKE_DATA } from "../../actions/like_actions";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState, users, user;
  
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.user.id]: action.user });
    case RECEIVE_ALL_VIDEOS:
      return Object.assign({}, state, action.payload.users);
    case RECEIVE_SINGLE_VIDEO:
      users = action.payload.users;
      user = action.payload.user;
      newState = Object.assign({}, state, users);
      newState[user.id] = Object.assign({}, newState[user.id], user);
      return newState;
    case RECEIVE_LIKE_DATA:
      user = action.payload.user;
      newState = Object.assign({}, state);
      newState[user.id] = Object.assign({}, newState[user.id], user);
      return newState;
    default:
      return state;
  }
};

export default usersReducer;