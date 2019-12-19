import React from 'react';
import { withRouter } from 'react-router-dom';
import SearchIndexItem from './search_index_item';

class SearchIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const result = this.props.location.search.slice(14);
    this.props.fetchSearchVideos(result);
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
          {searchItemDivs}
        </section>
      </main>
    );
  }
}

export default withRouter(SearchIndex);