import { connect } from 'react-redux';
import { hideModal } from '../../actions/modal_actions';
import Modal from './modal';

const msp = state => ({
  modal: state.ui.modal
});

const mdp = dispatch => ({
  hideModal: () => dispatch(hideModal())
});

export default connect (msp, mdp)(Modal);