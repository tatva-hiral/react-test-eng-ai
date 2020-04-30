import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from './Home';

import * as AppActions from '../../actions/app';

const mapStatesToProps = state => ({
  app: state.app
});

const mapDispatchToProps = dispatch => {
  const allActions = { ...AppActions };
  return {
    actions: bindActionCreators(allActions, dispatch)
  };
};

export default connect(mapStatesToProps, mapDispatchToProps)(Home);
