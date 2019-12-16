import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './nav_bar';
import { showModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
  const user = state.entities.users[state.session.id];
  return {
    currentUser: user,
  };
};

const mdp = dispatch => ({
  logoutUser: () => dispatch(logout()),
  showModal: modal => dispatch(showModal(modal))
});

export default connect(msp, mdp)(NavBar);