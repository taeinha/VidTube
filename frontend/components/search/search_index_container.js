import { connect } from 'react-redux';
import SearchIndex from './search_index';
import { fetchSearchVideos } from '../../actions/search_actions';

const msp = state => {
  return {
    videos: Object.values(state.entities.videos),
    users: state.entities.users,
  };
};

const mdp = dispatch => {
  return {
    fetchSearchVideos: (search_query) => dispatch(fetchSearchVideos(search_query))
  };
};

export default connect(msp, mdp)(SearchIndex);