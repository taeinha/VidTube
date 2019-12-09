import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitForm(this.state);
  }
  render() {
    return null;
  }
}

export default SessionForm;