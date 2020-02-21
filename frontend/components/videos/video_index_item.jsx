import React from 'react';
import { timeConvert } from '../../util/date_util';

const VideoIndexItem = ({ video, user, history, showLoader, hideLoader }) => {

  return (
    <div className="video-item-container pointer" 
      onClick={() => {
        showLoader({ show: true, color: "red" });
        setTimeout(() => {
          hideLoader();
          history.push(`/videos/${video.id}`);
        }, 1000)
      }}>
      <section className="video-item-inner-container">
        <div className="video-thumbnail-container aspect-ratio-container">
          <img src={video.thumbnailUrl} className="video-thumbnail aspect-ratio-container-inner"/>
        </div>
        <div className="video-item-info">
          <img src={window.dummyChannelPic} className="channel-image profile-picture"/>
          <div className="video-item-text">
            <div>
              <h3>{video.title}</h3>
            </div>
            <div>
              <div>
                <span>{user.username}</span>
              </div>
              <div>
                <span>{`${video.view_count} views`}</span>
                <span>{" \u2022 "}</span>
                <span>{timeConvert(video.created_at)}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}



export default VideoIndexItem;