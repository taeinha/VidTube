import React from 'react';
import { withRouter } from 'react-router-dom';
import SearchIndexItem from './search_index_item';

class SearchIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: this.props.location.search.slice(14).split("+").join(" ")
    };
  }

  componentDidMount() {
    this.props.fetchSearchVideos(this.state.result);
  }

  render() {
    const { videos, users, history } = this.props;

    const searchItemDivs = videos.map((video) => {
      return (
        <SearchIndexItem 
          video={video}
          user={users[video.uploader_id]}
          history={history}
          key={video.id}
        />
      )
    })
    return (
      <main className="search-index-overall-container">
        <header>
          FILTER
        </header>
        <section className="search-index-outer-container">
          {videos.length > 0 ? (
            searchItemDivs
          ) : (
            <main className="search-index-no-results">
              <p>Sorry! We can't seem to find a video with "{this.state.result}"</p>
            </main>
          )}
        </section>
      </main>
    );
  }
}

export default withRouter(SearchIndex);