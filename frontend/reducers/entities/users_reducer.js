import { RECEIVE_CURRENT_USER } from "../../actions/session_actions";
import { RECEIVE_ALL_VIDEOS, RECEIVE_SINGLE_VIDEO } from "../../actions/video_actions";
import { RECEIVE_LIKE_DATA } from "../../actions/like_actions";
import { RECEIVE_ALL_COMMENTS } from "../../actions/comment_actions";
import { merge } from 'lodash';
const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState, users, user;
  
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.user.id]: action.user });
    case RECEIVE_ALL_VIDEOS:
      return merge({}, state, action.payload.users);
    case RECEIVE_SINGLE_VIDEO:
      users = action.payload.users;
      user = action.payload.user;
      newState = merge({}, state, users);
      newState[user.id] = merge({}, newState[user.id], user);
      return newState;
    case RECEIVE_LIKE_DATA:
      user = action.payload.user;
      newState = merge({}, state);
      newState[user.id] = merge({}, newState[user.id], user);
      return newState;
    case RECEIVE_ALL_COMMENTS:
      return merge({}, state, action.payload.users);
    default:
      return state;
  }
};

export default usersReducer;