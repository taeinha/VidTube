import { connect } from "react-redux";
import { hideLoader } from "../../actions/load_actions";
import Load from "./load";


const msp = state => ({
  type: state.ui.load.type
});

const mdp = dispatch => ({
  hideLoader: () => dispatch(hideLoader())
});

export default connect(msp, mdp)(Load);
