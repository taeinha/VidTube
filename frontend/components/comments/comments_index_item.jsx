import React from 'react';
import { timeConvert } from '../../util/date_util';
// need to also pass in child comment (1 layer down only) maybe...
const CommentIndexItem = ({ comment, user }) => {

  return (
    <div className="comment-item-container">
      <img src={window.dummyChannelPic} />
      <div>
        <div>
          <h2>username placeholder</h2>
        </div>
        <div>
          <p>comment placeholder</p>
        </div>
        <div>
          LIKES placeholder
        </div>
      </div>
    </div>
  )
};

export default CommentIndexItem;