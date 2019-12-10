import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RECEIVE_EMAIL_CHECK = "RECEIVE_EMAIL_CHECK";

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

const receiveErrors = ({ responseJSON }) => ({
  type: RECEIVE_ERRORS,
  messages: responseJSON
});

const receiveEmailCheck = ({ validEmail }) => {
  return {
    type: RECEIVE_EMAIL_CHECK,
    validEmail
  };
};

export const login = formUser => dispatch => (
  SessionAPIUtil.login(formUser)
    .then(
      user => dispatch(receiveCurrentUser(user)),
      errors => dispatch(receiveErrors(errors))
    )
);

export const logout = () => dispatch => (
  SessionAPIUtil.logout()
    .then(
      user => dispatch(logoutCurrentUser(user)),
      errors => dispatch(receiveErrors(errors))
    )
);

export const signup = formUser => dispatch => (
  SessionAPIUtil.signup(formUser)
    .then(
      user => dispatch(receiveCurrentUser(user)),
      errors => dispatch(receiveErrors(errors))
    )
);

export const checkEmail = email => dispatch => (
  SessionAPIUtil.checkEmail(email)
    .then(
      validEmail => dispatch(receiveEmailCheck(validEmail)),
      errors => dispatch(receiveErrors(errors))
    )
);

//ajax request to only send email to get back a success or failure response