import { connect } from 'react-redux';
import { showSidebar, hideSidebar } from '../../actions/sidebar_actions';
import SideBar from './side_bar';

const msp = state => {
  return {
    sidebar: state.ui.sidebar
  };
};

const mdp = dispatch => ({
  hideSidebar: () => dispatch(hideSidebar())
});

export default connect(msp, mdp)(SideBar);