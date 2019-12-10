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
            <Link to='/login' onClick={clearErrors} className="session-blue-link">Sign in instead</Link>
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
              <div className="login-email-box">{this.state.email}</div>
            </header>
          ) }
          {!this.state.validEmail ? this._emailInput('login-input') : this._passwordInput('login-input')}
          {!this.state.validEmail ? (
            <>
              <div>
                <Link to='/signup' onClick={clearErrors} className="session-blue-link">Create account</Link>
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
          className={style}
          />
        <span>Username</span>
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
          className={style}
          />
        <span>Email</span>
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
          className={style}
          />
        <span>Password</span>
      </label>
    )
  }

  render() {
    const { formType, errors, clearErrors } = this.props;

    const errorLis = errors.map((error, i) => (
      <li key={i}>{error}</li>
    ))
    return (
      <div className="session-container">
        <section className="session-form-container">
          <ul className="session-errors">
            {errorLis}
          </ul>

          {formType === 'Sign Up' ? this.displaySignup() : this.displayLogin()}
        </section>
      </div>
    );
  }
}

export default SessionForm;