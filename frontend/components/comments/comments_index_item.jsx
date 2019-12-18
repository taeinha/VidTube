import React from 'react';
import { timeConvert } from '../../util/date_util';
import { withRouter } from 'react-router-dom';
// need to also pass in child comment (1 layer down only) maybe...
const CommentIndexItem = ({ comment, user, currentUser, createCommentLike, deleteCommentLike, history }) => {
  
  const handleCreateLike = (is_like) => {
    
    const like = {
      is_like,
      likable_id: comment.id,
      likable_type: "Comment"
    };
    createCommentLike(like);
  };
  const handleLike = (e, is_like) => {
    e.preventDefault();
    // const like = currentUser.comment_likes[comment.id];
    if (!currentUser) {
      history.push('/login');
      return null;
    }
    if (comment.like) {
      if (is_like !== comment.like.is_like) {
        deleteCommentLike(comment.id).then(() => handleCreateLike(is_like));
      } else {
        deleteCommentLike(comment.id);
      }
    } else {
      handleCreateLike(is_like);
    }
  };

  const _styleLike = (is_like, container) => {
    if (!currentUser) return null;
    if (comment.like) {
      if (comment.like.is_like === is_like) {
        return `video-likes-blue-${container}`;
      }
    }
    return null;
  };

  const likes = comment.like_counts.true;
  const dislikes = comment.like_counts.false;
  return (
    <div className="comment-item-container">
      <img src={window.dummyChannelPic} />
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
            className={`pointer ${_styleLike(true, "like")}`} 
            onClick={(e) => handleLike(e, true)}
          >
            <img src={window.likesIcon} />
            <span>{likes ? likes : 0}</span>
          </div>
          <div
            className={`pointer ${_styleLike(false, "like")}`} 
            onClick={(e) => handleLike(e, false)}
          >
            <img src={window.dislikesIcon} />
            <span>{dislikes ? dislikes : 0}</span>
          </div>
        </div>
      </div>
    </div>
  )
};

export default withRouter(CommentIndexItem);