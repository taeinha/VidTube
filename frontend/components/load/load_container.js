import { connect } from "react-redux";
import Modal from "./modal";
import { hideLoader } from "../../actions/load_actions";



const msp = state => ({
  modal: state.ui.modal,
  currentUser: state.session.id
});

const mdp = dispatch => ({
  hideModal: () => dispatch(hideModal())
});

export default connect(msp, mdp)(Modal);
