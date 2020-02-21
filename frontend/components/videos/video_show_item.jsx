import React from 'react';
import { Link } from 'react-router-dom';

const VideoShowItem = ({ video, user, history, showLoader, hideLoader }) => {
  return (
    <div className="video-show-item-container pointer" 
      onClick={() => {
        showLoader({ show: true, color: "red" });
        setTimeout(() => {
          hideLoader();
          history.push(`/videos/${video.id}`);
        }, 1000)
      }}>
      {/* <Link to=""> */}
        <div className="video-show-item-img-box">
          <img src={video.thumbnailUrl} />
        </div>
        <div className="video-show-item-info">
          <p>{video.title}</p>
          <p>{user.username}</p>
          <p>{video.view_count} views</p>
        </div>
      {/* </Link> */}
    </div>
  )
};

export default VideoShowItem;

// onClick = {() => history.push(`/videos/${video.id}`)}