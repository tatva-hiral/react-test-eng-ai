import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from './Home';

import * as PostActions from '../../actions/post';

const mapStatesToProps = state => ({
  posts: state.post.posts,
  totalPages: state.post.totalPages
});

const mapDispatchToProps = dispatch => {
  const allActions = { ...PostActions };
  return {
    actions: bindActionCreators(allActions, dispatch)
  };
};

export default connect(mapStatesToProps, mapDispatchToProps)(Home);
