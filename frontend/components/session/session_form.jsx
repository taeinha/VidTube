import React from 'react';
import { Link } from 'react-router-dom';

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
    const { formType, clearErrors } = this.props;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <header className="session-header">
            <h2>Create your Account</h2>
            <h4>to continue to VidTube</h4>
          </header>
          {this._usernameInput('signup-input')}
          {this._emailInput('signup-input')}
          {this._passwordInput('signup-input')}
          <div>
            <Link to='/login' className="session-blue-link">Sign in instead</Link>
            <button type="submit">{formType}</button>
          </div>
        </form>
      </>
    )
  }

  displayLogin() {
    const { formType, clearErrors } = this.props;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          { !this.state.validEmail ? (
            <header className="session-header login-header">
              <h2>Sign in</h2>
              <h4>to continue to VidTube</h4>
            </header>
          ) : (
            <header className="session-header login-header">
              <h2>Welcome</h2>
                <div className="login-email-box" onClick={this.returnToEmail}>
                  <img src={window.userProfileURL} className="user-signin-img"/>
                  {this.state.email}
                  <img src={window.angleArrowDown} className="down-arrow-img"/>
                </div>
            </header>
          ) }
          {!this.state.validEmail ? this._emailInput('login-input') : this._passwordInput('login-input')}
          {!this.state.validEmail ? (
            <>
              <div>
                <Link to='/signup' className="session-blue-link">Create account</Link>
                <button onClick={this.handleNext}>Next</button>
              </div>
              <button onClick={this.demoUser}>Demo User</button>
            </>
          ) : (
            <div className="login-submit-button-box">
              <button type="submit">{formType}</button>
            </div>
          )}
        </form>
      </>
    )
  }

  _usernameInput(style) {
    return (
      <label>
        <input
          type="text"
          value={this.state.username}
          onChange={this.update('username')}
          placeholder="Username"
          className={style}
          />
        <span>{this._renderError('username')}</span>
      </label>
    )
  }

  _emailInput(style) {
    return (
      <label>
        <input
          type="email"
          value={this.state.email}
          onChange={this.update('email')}
          placeholder="Email"
          className={style}
          />
        <span>{this._renderError('email')}</span>
      </label>
    )
  }

  _passwordInput(style) {
    return (
      <label>
        <input
          type="password"
          value={this.state.password}
          onChange={this.update('password')}
          placeholder="Password"
          className={style}
          />
        <span>{this._renderError('password')}</span>
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
        <section className="session-form-container">
          {formType === 'Sign Up' ? this.displaySignup() : this.displayLogin()}
        </section>
      </div>
    );
  }
}

export default SessionForm;