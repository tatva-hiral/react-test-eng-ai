import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TablePagination from '@material-ui/core/TablePagination';
import PropTypes from 'prop-types';
// import custsom components
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

function Home(props) {
  const history = useHistory();
  const [page, setPage] = useState(0);
  const classes = useStyles();
  const {
    actions: { getPostRequest },
    posts
  } = props;

  useEffect(() => {
    getPostRequest(page);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      getPostRequest(page + 1);
      setPage(page + 1);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // useEffect(() => {
  //   const list = document.getElementById('App');
  //   if (props.scrollable) {
  //     // list has fixed height
  //     list.addEventListener('scroll', e => {
  //       const el = e.target;
  //       if (el.scrollTop + el.clientHeight === el.scrollHeight) {
  //         setLoadMore(true);
  //       }
  //     });
  //   } else {
  //     // list has auto height
  //     window.addEventListener('scroll', () => {
  //       if (window.scrollY + window.innerHeight === list.clientHeight + list.offsetTop) {
  //         setLoadMore(true);
  //       }
  //     });
  //   }
  // }, []);

  // useEffect(() => {
  //   const list = document.getElementById('App');
  //   if (list.clientHeight <= window.innerHeight && list.clientHeight) {
  //     setLoadMore(true);
  //   }
  // }, []);

  const handleViewMore = post => {
    history.push({
      pathname: Path.PostDetail,
      state: {
        post
      }
    });
  };

  return (
    <div id="App">
      <Header title={'Posts'} />
      <div className={classes.root}>
        {posts && posts.length > 0 ? (
          <Grid item container spacing={3} direction="row" justify="flex-start" alignItems="center">
            {posts.map(post => (
              <Grid key={Math.random()} item xs={12} md={4} lg={3}>
                <PostCard posts={post} viewMore={() => handleViewMore(post)} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

/* initialize proptypes criteria */
Home.propTypes = {
  actions: PropTypes.object,
  getPostRequest: PropTypes.func,
  posts: PropTypes.array
};
/* initialize default props */
Home.defaultProps = {
  posts: []
};

export default Home;
