import React from 'react';
import { getDate } from '../../util/date_util';
import { Link } from 'react-router-dom';

class VideoShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchSingleVideo(this.props.match.params.videoId);
    this.display = this.display.bind(this);
  }

  _showEditButton() {
    const { currentUser, video } = this.props;
    const editButton = currentUser === video.uploader_id ? (
      <Link to="#" className="video-edit-button">
        <span>EDIT VIDEO</span>
      </Link>
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
          <iframe 
            className="video-show-item"
            src="https://www.youtube.com/embed/_9FEBATgh78" 
            frameBorder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
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
              <img src={window.dummyChannelPic} className="channel-image" />
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
    return (
      <section className="video-show-right-container">
        TBD
      </section>
    )
  }

  display() {
    return (
      <>
        {this.displayLeft()}
        {this.displayRight()}
      </>
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