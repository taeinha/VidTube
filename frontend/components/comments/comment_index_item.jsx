import React from 'react';
import { timeConvert } from '../../util/date_util';
import { withRouter } from 'react-router-dom';
import EditCommentFormContainer from './edit_comment_form_container';


// need to also pass in child comment (1 layer down only) maybe...
class CommentIndexItem extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      showEditForm: false
    };
    this.handleCreateLike = this.handleCreateLike.bind(this);
    this.handleLike = this.handleLike.bind(this);
  }

  handleCreateLike(is_like) {
    const { comment, createCommentLike } = this.props;
    const like = {
      is_like,
      likable_id: comment.id,
      likable_type: "Comment"
    };
    createCommentLike(like);
  }

  handleLike(e, is_like) {
    const { currentUser, comment, deleteCommentLike, history } = this.props;
    e.preventDefault();
    if (!currentUser) {
      history.push('/login');
      return null;
    }
    if (comment.like) {
      if (is_like !== comment.like.is_like) {
        deleteCommentLike(comment.id).then(() => this.handleCreateLike(is_like));
      } else {
        deleteCommentLike(comment.id);
      }
    } else {
      this.handleCreateLike(is_like);
    }
  }

  _styleLike(is_like, container) {
    const { currentUser, comment } = this.props;
    if (!currentUser) return null;
    if (comment.like) {
      if (comment.like.is_like === is_like) {
        return `video-likes-blue-${container}`;
      }
    }
    return null;
  }

  displayCommentInfo(likes, dislikes)  {
    const { comment, user } = this.props;
    return (
      <div className="comment-item-info">
        <div className="comment-item-user-info">
          <span>{user.username}</span>
          <span>{timeConvert(comment.created_at)}</span>
        </div>
        <div className="comment-item-body">
          <p>{comment.body}</p>
        </div>
        <div className="comment-item-likes-container">
          <div
            className={`pointer ${this._styleLike(true, "like")}`}
            onClick={(e) => this.handleLike(e, true)}
          >
            <img src={window.likesIcon} />
            <span>{likes ? likes : 0}</span>
          </div>
          <div
            className={`pointer ${this._styleLike(false, "like")}`}
            onClick={(e) => this.handleLike(e, false)}
          >
            <img src={window.dislikesIcon} />
            <span>{dislikes ? dislikes : 0}</span>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const { comment } = this.props;
    const likes = comment.like_counts.true;
    const dislikes = comment.like_counts.false;
    return (
      <div className="comment-item-container">
        <img src={window.dummyChannelPic} />
        {!this.state.showEditForm ? (
          this.displayCommentInfo(likes, dislikes)
        ) : (
          <EditCommentFormContainer />
        )}
  
      </div>
    )
  }
};

export default withRouter(CommentIndexItem);