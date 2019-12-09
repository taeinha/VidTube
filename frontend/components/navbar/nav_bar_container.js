import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './nav_bar';

const msp = state => {
  const user = state.entities.users[state.session.id];
  return {
    currentUser: user
  };
};

const mdp = dispatch => ({
  logoutUser: () => dispatch(logout())
});

export default connect(msp, mdp)(NavBar);