import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './nav_bar';
import { showModal } from '../../actions/modal_actions';
import { showSidebar, hideSidebar } from '../../actions/sidebar_actions';

const msp = (state, ownProps) => {
  const user = state.entities.users[state.session.id];
  return {
    currentUser: user,
    sidebar: state.ui.sidebar
  };
};

const mdp = dispatch => ({
  logoutUser: () => dispatch(logout()),
  showModal: modal => dispatch(showModal(modal)),
  showSidebar: sidebar => dispatch(showSidebar(sidebar)),
  hideSidebar: () => dispatch(hideSidebar())
});

export default connect(msp, mdp)(NavBar);