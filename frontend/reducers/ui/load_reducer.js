import { SHOW_LOADER, HIDE_LOADER } from "../../actions/load_actions";

const loadReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case SHOW_LOADER:
      return action.load;
    case HIDE_LOADER:
      return {};
    default:
      return state;
  }
};

export default loadReducer;
