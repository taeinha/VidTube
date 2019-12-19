import React from 'react';
import { timeConvert } from '../../util/date_util';

const SearchIndexItem = ({ video, user, history }) => {

  return (
    <main 
      className="search-index-item-container pointer"
      onClick={() => history.push(`/videos/${video.id}`)}
    >
      <img src={video.thumbnailUrl} />
      <section className="search-index-item-info">
        <h2>{video.title}</h2>
        <div>
          <span>{user.username}</span>
          <span className="search-index-item-bullet">{"\u2022"}</span>
          <span>{video.view_count} views</span>
          <span className="search-index-item-bullet">{"\u2022"}</span>
          <span>{timeConvert(video.created_at)}</span>
        </div>
        <p>{video.description}</p>
      </section>
    </main>
  );
};

export default SearchIndexItem;