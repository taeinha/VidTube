import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../actions/session_actions';
import { clearErrors } from '../../actions/error_actions';

const msp = state => ({
  errors: state.errors.session,
  formType: 'Sign Up'
});

const mdp = dispatch => ({
  submitForm: formUser => dispatch(signup(formUser)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(msp, mdp)(SessionForm);