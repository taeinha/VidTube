import React from 'react';
import VideoIndexItem from './video_index_item';
import { Link } from 'react-router-dom';
import SideBar from '../sidebar/side_bar_container';

class VideoIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.displayAllVideos = this.displayAllVideos.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllVideos();
  }

  displayAllVideos() {
    const { videos, users, showLoader, hideLoader } = this.props;
    const videoDivs = videos.map(video => (
      <VideoIndexItem 
        video={video} 
        user={users[video.uploader_id]}
        history={this.props.history}
        key={video.id}
        showLoader={showLoader}
        hideLoader={hideLoader}
      />
      )
    )

    const dummyDivs = [1,2,3,4,5].map(el => (
      <div className="hidden-video-item" key={el}></div>
    ));

    return (
      <section className="inner-videos-container">
        {videoDivs}
        {dummyDivs}
      </section>
    )
  }

  render() {
    return (
      <main className="overall-videos-container">
        <SideBar />
        <section className={`outer-videos-container ${this.props.sidebar.show ? "outer-videos-sidebar-extend" : null}`}>
          <h1>Recommended</h1>
          {this.displayAllVideos()}
        </section>
      </main>
    )
  }
}

export default VideoIndex;