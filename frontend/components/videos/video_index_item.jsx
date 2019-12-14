import React from 'react';
import { timeConvert } from '../../util/date_util';

const VideoIndexItem = ({ video, user, history }) => {
  // debugger
  return (
    <div className="video-item-container pointer" onClick={() => history.push(`/videos/${video.id}`)}>
      <section className="video-item-inner-container">
        <img src={window.mochiIcon} className="video-thumbnail"/>
        <div className="video-item-info">
          <img src={window.dummyChannelPic} className="channel-image"/>
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

{/* <video width="300" controls="controls" preload="metadata">
        <source src={video.videoUrl} type="video/mp4"/>
      </video> */}