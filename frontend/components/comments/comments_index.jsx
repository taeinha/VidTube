import React from 'react';
import CommentIndexItem from './comments_index_item';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      video_id: this.props.video.id,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateTextArea() {
    if (this.textAreaRef) {
      this.textAreaRef.style.height = "24px";
      this.textAreaRef.style.height = this.textAreaRef.scrollHeight + "px";
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment(this.state)
      .then(() => this.clearEntry());
        
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
        <div className="comment-form-content">
          <img src={window.mochiIcon} />
          <form onSubmit={this.handleSubmit}>
            <label>
              <textarea 
                placeholder="Add a public comment..."
                onChange={this.update('body')}
                value={this.state.body}
                ref={textAreaRef => this.textAreaRef = textAreaRef}
              />
            </label>
            <div>
              <button className="blue-button-only" type="submit">COMMENT</button>
            </div>
          </form>
        </div>
      </main>
    );
  }

  displayCommentItems() {
    const { comments, users, createCommentLike, deleteCommentLike, currentUser } = this.props;
    const currUser = currentUser ? users[currentUser] : null;
    const commentDivs = comments.map((comment) => (
      <CommentIndexItem
        key={comment.id}
        comment={comment}
        user={users[comment.user_id]}
        createCommentLike={createCommentLike}
        deleteCommentLike={deleteCommentLike}
        currentUser={currUser}
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

export default CommentIndex;