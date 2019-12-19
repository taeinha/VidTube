import React from 'react';
import { withRouter } from 'react-router-dom';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.comment;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUserNotLoggedIn = this.handleUserNotLoggedIn.bind(this);
    this.hideForm = this.hideForm.bind(this);
  }

  componentDidMount() {
    this.updateTextArea();
    if (this.props.formType === 'Update') {
      this.setState({ showCreateButton: true });
    }
  }

  handleSubmit(e) {
    const { formType, hideEditForm } = this.props;
    e.preventDefault();
    this.props.submitComment(this.state)
      .then(() => {
        this.clearEntry();
        if (formType === 'Update') hideEditForm();
      });
  }

  clearEntry() {
    this.setState({ body: '' });
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
      this.updateTextArea();
    };
  }

  handleUserNotLoggedIn() {
    if (!this.props.currentUser) {
      this.props.history.push('/login');
      return null;
    }
    this.setState({ showCreateButton: true });
  }

  updateTextArea() {
    if (this.textAreaRef) {
      this.textAreaRef.style.height = "24px";
      this.textAreaRef.style.height = this.textAreaRef.scrollHeight + "px";
    }
  }

  hideForm() {
    const { formType, hideEditForm } = this.props;
    if (formType === 'Update') {
      hideEditForm();
    } else {
      this.setState({ showCreateButton: false, body: '' });
    }
  }

  render() {
    const { formType } = this.props;
    return (
      <div className="comment-form-content">
        { formType === 'Create' ? (
          <img src={window.mochiIcon} className="comments-profile-img"/>
        ) : null }
        <form onSubmit={this.handleSubmit}>
          <label>
            <textarea
              placeholder="Add a public comment..."
              onChange={this.update('body')}
              onClick={this.handleUserNotLoggedIn}
              value={this.state.body}
              ref={textAreaRef => this.textAreaRef = textAreaRef}
              wrap="soft"
            />
          </label>
          { this.state.showCreateButton && (
            <div className="comment-form-buttons">
            <div 
              className="comment-form-cancel-button pointer"
              onClick={this.hideForm}
            >CANCEL</div>
            <button className="blue-button-only" type="submit">{formType === 'Create' ? "COMMENT" : "SAVE"}</button>
          </div>
          ) }
          
        </form>
      </div>
    );
  }
}

export default withRouter(CommentForm);