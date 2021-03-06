import React from 'react';
import { Link } from 'react-router-dom';
import VidtubeLogo from '../logo/logo';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      validEmail: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.demoUser = this.demoUser.bind(this);
    this.returnToEmail = this.returnToEmail.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleNext(e) {
    e.preventDefault();
    this.props.checkEmail(this.state.email)
      .then(({validEmail}) => {
        // debugger;
        this.setState({ validEmail: validEmail });
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitForm(this.state)
      .then(() => this.props.history.push('/'));
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  demoUser(e) {
    e.preventDefault();
    this.setState({ email: 'demouser@gmail.com', password: 'abcdef' });
  }

  returnToEmail(e) {
    e.preventDefault();
    this.setState({ validEmail: false });
  }

  displaySignup() {
    const { formType } = this.props;
    return (
      <section className="session-form-signup-container">
        <div>
          <header className="session-header">
            < VidtubeLogo />
            <h2>Create your Account</h2>
            <h4>to continue to VidTube</h4>
          </header>
          <form onSubmit={this.handleSubmit} noValidate>
            <div>
              {this._usernameInput('signup-input')}
              {this._emailInput('signup-input')}
              {this._passwordInput('signup-input')}
              <p>Use 6 or more characters with a mix of letters, numbers & symbols</p>
            </div>
            <div>
              <Link to='/login' className="session-blue-link pointer">Sign in instead</Link>
              <button type="submit">{formType}</button>
            </div>
          </form>
        </div>
        <div className="signup-account-pic-box">
          <img src={window.accountPic} />
          <p>One account. All of VidTube working for you.</p>
        </div>
      </section>
    )
  }

  displayLogin() {
    const { formType } = this.props;
    return (
      <section className="session-form-login-container">
        <form onSubmit={this.handleSubmit} noValidate>
          { !this.state.validEmail ? (
            <header className="session-header login-header">
              < VidtubeLogo />
              <h2>Sign in</h2>
              <h4>to continue to VidTube</h4>
            </header>
          ) : (
            <header className="session-header login-header">
              < VidtubeLogo />
              <h2>Welcome</h2>
                <div className="login-email-box" onClick={this.returnToEmail}>
                  <img src={window.userProfileURL} className="user-signin-img"/>
                  {this.state.email}
                  <img src={window.angleArrowDown} className="down-arrow-img"/>
                </div>
            </header>
          ) }
          {!this.state.validEmail ? (
            <>
              {this._emailInput('login-input')}
              <p>Not your computer? Use incognito mode to sign in privately.</p>
            </>
          ) : (
            <>
              {this._passwordInput('login-input')}
              <div className="login-input-password-filler"></div>
            </>
          )}
          {!this.state.validEmail ? (
            <>
              <div>
                <Link to='/signup' className="session-blue-link pointer">Create account</Link>
                <button onClick={this.handleNext}>Next</button>
              </div>
              <div className="demo-user-box">
                <a onClick={this.demoUser} className="session-blue-link pointer">Sign In as Demo User</a>
              </div>
            </>
          ) : (
            <div className="login-submit-button-box">
              <button type="submit">{formType}</button>
            </div>
          )}
        </form>
      </section>
    )
  }

  _usernameInput(style) {
    const error = this._renderError('username');
    return (
      <label>
        <input
          type="text"
          value={this.state.username}
          onChange={this.update('username')}
          className={`${style} ${error ? "error-input-style" : null}`}
          required
          />
        <span className="input-label-float">Username</span>
        {error && (
          <div className="error-input-warnings">
            <img src={window.errorIcon} className="error-icon-img" />
            <span>{error}</span>
          </div>
        )}
      </label>
    )
  }

  _emailInput(style) {
    const error = this._renderError('email');
    return (
      <label>
        <input
          type="text"
          value={this.state.email}
          onChange={this.update('email')}
          className={`${style} ${error ? "error-input-style" : null}`}
          required
          />
        <span className="input-label-float">Email</span>
        {error && (
          <div className="error-input-warnings">
            <img src={window.errorIcon} className="error-icon-img" />
            <span>{error}</span>
          </div>
        )}
      </label>
    )
  }

  _passwordInput(style) {
    const error = this._renderError('password');
    return (
      <label>
        <input
          type="password"
          value={this.state.password}
          onChange={this.update('password')}
          className={`${style} ${error ? "error-input-style" : null}`}
          required
          />
        <span className="input-label-float">Password</span>
        {error && (
          <div className="error-input-warnings">
            <img src={window.errorIcon} className="error-icon-img" />
            <span>{error}</span>
          </div>
        )}
      </label>
    )
  }

  _renderError(field) {
    const { errors } = this.props;
    return errors.find(error => error.toLowerCase().includes(field));
  }


  render() {
    const { formType } = this.props;

    return (
      <div className="session-container">
        {formType === 'Sign Up' ? this.displaySignup() : this.displayLogin()}
      </div>
    );
  }
}

export default SessionForm;