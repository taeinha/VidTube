import { connect } from "react-redux";
import { hideLoader } from "../../actions/load_actions";
import Load from "./load";


const msp = state => ({
  load: state.ui.load
});

const mdp = dispatch => ({
  hideLoader: () => dispatch(hideLoader())
});

export default connect(msp, mdp)(Load);
