import { RECEIVE_VIDEO_ERRORS } from "../../actions/video_actions";
import { HIDE_MODAL } from "../../actions/modal_actions";
import { CLEAR_ERRORS } from "../../actions/error_actions";


const _nullState = [];

const videoErrorsReducer = (state = _nullState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_VIDEO_ERRORS:
      return action.messages;
    case HIDE_MODAL:
      return _nullState;
    case CLEAR_ERRORS:
      return _nullState;
    default:
      return state;
  }
};

export default videoErrorsReducer;