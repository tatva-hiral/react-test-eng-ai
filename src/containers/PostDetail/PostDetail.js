import React from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
// import custsom components
import { Redirect } from 'react-router';
import Header from '../../components/Header';
import PostCard from './PostCard';
import { Path } from '../../constants';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '50px',
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}));

function PostDetail(props) {
  const classes = useStyles();
  const { location } = props;
  if (location && location.state && location.state.post) {
    console.log('props', props);
    return (
      <div className="post-detail">
        <Header />
        <div className={classes.root}>
          <Grid container spacing={3} justify="flex-start" alignItems="center">
            <Grid
              item
              xs={12}
              md={12}
              lg={12}
              spacing={3}
              direction="row"
              justify="flex-start"
              alignItems="center"
            >
              <PostCard key={location.state.post.objectID} posts={location.state.post} />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
  return <Redirect to={Path.Home} />;
}

/* initialize proptypes criteria */
PostDetail.propTypes = {
  location: PropTypes.object,
  post: PropTypes.object
};
/* initialize default props */
PostDetail.defaultProps = {
  location: {},
  post: {}
};

export default withRouter(PostDetail);
