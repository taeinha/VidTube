import React from 'react';
import { timeConvert } from '../../util/date_util';
// need to also pass in child comment (1 layer down only) maybe...
const CommentIndexItem = ({ comment, user }) => {

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
            className="pointer"
            onClick={(e) => null}
          >
            <img src={window.likesIcon} />
            <span>10</span>
          </div>
          <div
            className="pointer"
            onClick={(e) => null}
          >
            <img src={window.dislikesIcon} />
            <span>15</span>
          </div>
        </div>
      </div>
    </div>
  )
};

export default CommentIndexItem;