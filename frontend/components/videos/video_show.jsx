import React from 'react';
import { getDate } from '../../util/date_util';
import { Link } from 'react-router-dom';
import VideoShowItem from './video_show_item';

class VideoShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.display = this.display.bind(this);
  }

  componentDidMount() {
    // debugger
    this.props.fetchSingleVideo(this.props.match.params.videoId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.videoId !== prevProps.match.params.videoId) {
      this.props.fetchSingleVideo(this.props.match.params.videoId);
    }
  }

  _showEditButton() {
    const { currentUser, video, showModal } = this.props;
    const editButton = currentUser === video.uploader_id ? (
      <div 
        className="video-edit-button pointer" 
        onClick={() => showModal(
          {type: 'edit_video', 
          currentVideo: this.props.match.params.videoId})}
      >
        <span>EDIT VIDEO</span>
      </div>
    ) : null;

    return (
      <>
        {editButton}
      </>
    )
  }

  displayLeft() {
    const { video, users } = this.props;

    return (
      <section className="video-show-left-container">
        <div className="video-show-item-container">
          {/* <iframe 
            className="video-show-item"
            src="https://www.youtube.com/embed/_9FEBATgh78" 
            frameBorder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe> */}
          <video 
            controls="controls" 
            className="video-show-item"
            key={video.videoUrl}
            autoPlay
          >
            <source src={video.videoUrl} type="video/mp4"/>
          </video>
        </div>
        <div className="video-show-info-container">
          <h1>{video.title}</h1>
          <div className="video-show-info">
            <div className="video-info-left">
              <span>{`${video.view_count} views`}</span>
              <span>{" \u2022 "}</span>
              <span>{getDate(video.created_at)}</span>
            </div>
            <div className="video-info-right">
              <div className="video-likes-container">
                <div className="pointer">
                  <img src={window.likesIcon} />
                  <span>10K</span>
                </div>
                <div className="pointer">
                  <img src={window.dislikesIcon} />
                  <span>8.5K</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="video-show-user-container">
          <div className="video-show-user">
            <div className="video-show-user-left">
              <img src={window.dummyChannelPic} className="channel-image profile-picture" />
              <div>
                <h2>{users[video.uploader_id].username}</h2>
              </div>
            </div>
            <div>
              {this._showEditButton()}
            </div>
          </div>
          <div className="video-show-description">
            <div></div>
            <p>{video.description}</p>
          </div>
        </div>
      </section>
    )
  }

  displayRight() {
    if (!this.props.video.showVideos) return null;
    let that = this;
    const videoDivs = this.props.video.showVideos.map((videoId, i) => {
      const vid = that.props.videos[videoId];
      const user = that.props.users[vid.uploader_id];
      return (
        <section key={i}>
          <VideoShowItem 
            key={videoId} 
            video={vid} 
            history={that.props.history}
            user={user}
          />
          {i === 0 ? <div key={i} className="video-show-fake-div"></div> : null}
        </section>
      )
    })
    return (
      <section className="video-show-right-container">
        <p>Up next</p>
        {videoDivs}
      </section>
    )
  }

  display() {
    return (
      <section className="second-outer-video-show-container">
        {this.displayLeft()}
        {this.displayRight()}
      </section>
    )
  }

  render() {
    const { video } = this.props;
    return (
      <main className="overall-video-show-container">
        {video ? this.display() : null }
      </main>
    );
  }
}

export default VideoShow;