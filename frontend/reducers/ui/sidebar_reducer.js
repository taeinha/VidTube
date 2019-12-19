import { SHOW_SIDE_BAR, HIDE_SIDE_BAR } from "../../actions/sidebar_actions";

const sidebarReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case SHOW_SIDE_BAR:
      return action.sidebar;
    case HIDE_SIDE_BAR:
      return {};
    default:
      return state;
  }
};

export default sidebarReducer;