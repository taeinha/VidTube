import React from 'react';
import CommentIndexItem from './comments_index_item';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    
  }

  componentDidMount() {
    this.props.fetchAllComments(this.props.video.id);
  }

  displayCommentForm() {
    return (
      <main className="comment-create-form-container">
        <header className="comment-form-header">
          285 Comments (Under Construction)
        </header>
        <div className="comment-form-content">
          <img src={window.mochiIcon} />
          <form>
            <label>
              <input 
                type="text"
                placeholder="Add a public comment..."
              />
            </label>
            <div>
              <button className="blue-button-only">COMMENT</button>
            </div>
          </form>
        </div>
      </main>
    );
  }

  displayCommentItems() {
    const { comments, users } = this.props;
    const commentDivs = comments.map((comment, i) => (
      <CommentIndexItem
        key={comment.id}
        comment={comment}
        user={users[comment.user_id]}
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