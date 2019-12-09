import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';
import { clearErrors } from '../../actions/error_actions';

const msp = state => ({
  errors: state.errors.session,
  formType: 'Log In'
});

const mdp = dispatch => ({
  submitForm: formUser => dispatch(login(formUser)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(msp, mdp)(SessionForm);