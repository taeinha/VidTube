import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';
import { clearErrors } from '../../actions/error_actions';

const msp = state => ({
  errors: state.errors.session,
  formType: 'Log In',
  validEmail: state.session.validEmail
});

const mdp = dispatch => ({
  submitForm: formUser => dispatch(login(formUser)),
  clearErrors: () => dispatch(clearErrors()),
  checkEmail: email => dispatch(checkEmail(email))
});

export default connect(msp, mdp)(SessionForm);