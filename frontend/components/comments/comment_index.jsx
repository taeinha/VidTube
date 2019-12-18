import React from 'react';
import CommentIndexItem from './comment_index_item';
import { withRouter } from 'react-router-dom';
import CreateCommentFormContainer from './create_comment_form_container';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchAllComments(this.props.video.id);
  }

  displayCommentForm() {
    const { video } = this.props;
    return (
      <main className="comment-create-form-container">
        <header className="comment-form-header">
          {video.comment_count} Comment{video.comment_count > 1 ? "s" : null}
        </header>

        <CreateCommentFormContainer 
          video={video}
        />
      </main>
    )
  }

  displayCommentItems() {
    const { comments, users, createCommentLike, deleteCommentLike, currentUser, removeComment } = this.props;
    const currUser = currentUser ? users[currentUser] : null;
    const commentDivs = comments.map((comment) => (
      <CommentIndexItem
        key={comment.id}
        comment={comment}
        user={users[comment.user_id]}
        createCommentLike={createCommentLike}
        deleteCommentLike={deleteCommentLike}
        currentUser={currUser}
        removeComment={removeComment}
      />
      )
    )

    return (
      <>
        {commentDivs}
      </>
    )
  }

  render() {
    return (
      <section className="video-show-overall-comment-container">
        {this.displayCommentForm()}
        {this.displayCommentItems()}
      </section>
    );
  }
}

export default withRouter(CommentIndex);