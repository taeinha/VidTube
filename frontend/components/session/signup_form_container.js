import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../actions/session_actions';

const msp = state => ({
  errors: state.errors.session,
  formType: 'signup'
});

const mdp = dispatch => ({
  submitForm: formUser => dispatch(signup(formUser))
});

export default connect(msp, mdp)(SessionForm);