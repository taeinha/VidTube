import { 
  RECEIVE_CURRENT_USER, 
  LOGOUT_CURRENT_USER, 
  RECEIVE_EMAIL_CHECK
} from "../../actions/session_actions";

const _nullSession = {
  id: null,
  validEmail: false
};

const sessionReducer = (state = _nullSession, action) => {
  Object.freeze(state);
  
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { id: action.user.id, validEmail: false };
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    case RECEIVE_EMAIL_CHECK:
      let newState = Object.assign({}, state);
      return Object.assign({}, newState, {validEmail: action.validEmail});
    default:
      return state;
  }
};

export default sessionReducer;