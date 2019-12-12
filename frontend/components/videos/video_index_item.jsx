import React from 'react';

const MIN_CONVERSION = {
  year: 525600,
  month: 43800,
  week: 10080,
  day: 1440,
  hour: 60,
};

const VideoIndexItem = ({ video, user }) => {
  debugger
  return (
    <div className="video-item-container">
      <section className="video-item-inner-container">
        <img src={window.thumbnail} className="video-thumbnail"/>
        <div className="video-item-info">
          <img src={window.dummyChannelPic} className="channel-image"/>
          <div>
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
                <span>{video.created_at}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const _timeConvert = createdAt => {
  const startDate = new Date(createdAt);
  const endDate = Date.now();
  const min = Math.floor((endDate - startDate) / (1000 * 60));

  
  if (min >= MIN_CONVERSION.year) {
    return `${Math.floor(min / MIN_CONVERSION.year)} years ago`;
  } else if (min >= MIN_CONVERSION.month) {
    return `${Math.floor(min / MIN_CONVERSION.month)} months ago`;
  } else if (min >= MIN_CONVERSION.week) {
    return `${Math.floor(min / MIN_CONVERSION.week)} weeks ago`;
  }
}

export default VideoIndexItem;

{/* <video width="300" controls="controls" preload="metadata">
        <source src={video.videoUrl} type="video/mp4"/>
      </video> */}