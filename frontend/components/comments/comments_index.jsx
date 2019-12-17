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
        <div>
          <img src={window.mochiIcon} />
          <form>
            <label>
              <input 
                type="text"
                placeholder="Add a public comment..."
              />
            </label>
            <div>
              <button>COMMENT</button>
            </div>
          </form>
        </div>
      </main>
    );
  }

  render() {
    return (
      <section className="video-show-overall-comment-container">
        {this.displayCommentForm()}
        <CommentIndexItem />
      </section>
    );
  }
}

export default CommentIndex;