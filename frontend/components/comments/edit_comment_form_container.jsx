import { connect } from 'react-redux';
import CommentForm from './comment_form';
import React from 'react';
import { updateComment, deleteComment } from '../../actions/comment_actions';

updateComment: comment => dispatch(updateComment(comment))

class EditCommentForm extends React.Component {
  render() {
    const { comment, currentUser, formType, errors, submitComment, deleteComment, clearErrors, hideEditForm } = this.props;
    if (!comment || !currentUser || comment.user_id !== currentUser) return null;
    
    return (
      <main className="comment-create-form-container">
        <CommentForm 
          comment={comment}
          currentUser={currentUser}
          formType={formType}
          errors={errors}
          submitComment={submitComment}
          deleteComment={deleteComment}
          clearErrors={clearErrors}
          hideEditForm={hideEditForm}
        />
      </main>
    )
  }
}

const msp = (state, ownProps) => {
  return {
    comment: state.entities.comments[ownProps.comment.id],
    currentUser: state.session.id,
    formType: "Update",
    errors: state.errors.comment,
  };
};

const mdp = dispatch => {
  return {
    submitComment: (comment) => dispatch(updateComment(comment)),
    deleteComment: commentId => dispatch(deleteComment(commentId)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(msp, mdp)(EditCommentForm);