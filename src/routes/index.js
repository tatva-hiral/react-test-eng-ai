import React from 'react';
// import external libraries
import { Switch, Route } from 'react-router';
import Loadable from 'react-loadable';
// import custom components
import Loader from '../components/Loader';
import PageNotFound from './PageNotFound';
// import custom utilities
import { Path } from '../constants';
// import containers
const Home = Loadable({
  loader: () => import('../containers/Home'),
  loading: () => <Loader />
});
const PostDetail = Loadable({
  loader: () => import('../containers/PostDetail'),
  loading: () => <Loader />
});

function Routes() {
  return (
    <Switch>
      <Route exact path={Path.Root} component={Home} />
      <Route exact path={Path.Home} component={Home} />
      <Route exact path={Path.PostDetail} component={PostDetail} />
      <Route path="*" component={PageNotFound} />
    </Switch>
  );
}

export default Routes;
