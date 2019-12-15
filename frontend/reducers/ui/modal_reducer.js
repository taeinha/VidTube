import { SHOW_MODAL, HIDE_MODAL } from "../../actions/modal_actions";

const modalReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case SHOW_MODAL:
      return action.modal;
    case HIDE_MODAL:
      return {};
    default:
      return state;
  }
};

export default modalReducer;