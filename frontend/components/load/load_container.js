import { connect } from "react-redux";
import { hideLoader } from "../../actions/load_actions";
import Load from "./load";


const msp = state => ({
  show: state.ui.load.show,
  color: state.ui.load.color
});

const mdp = dispatch => ({
  hideLoader: () => dispatch(hideLoader())
});

export default connect(msp, mdp)(Load);
