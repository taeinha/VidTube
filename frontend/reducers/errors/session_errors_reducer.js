import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from "../../actions/session_actions";

const _nullState = [];

const sessionErrorsReducer = (state = _nullState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.messages;
    case RECEIVE_CURRENT_USER:
      return _nullState;
    default:
      return state;
  }
};

export default sessionErrorsReducer;