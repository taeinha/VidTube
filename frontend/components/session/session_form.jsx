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

  render() {
    const { formType, errors, clearErrors } = this.props;

    const errorLis = errors.map((error, i) => (
      <li key={i}>{error}</li>
    ))
    return (
      <div className="session-form-container">

        <h2>{formType}</h2>

        <ul className="session-errors">
          {errorLis}
        </ul>

        <form onSubmit={this.handleSubmit}>
          { formType === 'Sign Up' ? (
            <label>
              Username:
              <input 
                type="text"
                value={this.state.username}
                onChange={this.update('username')}
              />
            </label>
          ) : (null) }
          { formType === 'Sign Up' || !this.state.validEmail ? (
            <label>
              Email:
              <input 
                type="email"
                value={this.state.email}
                onChange={this.update('email')}
              />
            </label>
          ) : (null) }
          {formType === 'Sign Up' || this.state.validEmail ? (
            <label>
              Password:
              <input 
                type="password"
                value={this.state.password}
                onChange={this.update('password')}
              />
            </label>
          ) : (null) }
          {formType === 'Log In' && !this.state.validEmail ? (
            <button onClick={this.handleNext}>Next</button>
          ) : (
            <button type="submit">{formType}</button>
          ) }
          {formType === 'Sign Up' ? (
              <Link to='/login' onClick={clearErrors}>Log In</Link>
            ) : (
              <Link to='/signup' onClick={clearErrors}>Sign Up</Link>
            ) }
        </form>
      </div>
    );
  }
}

export default SessionForm;