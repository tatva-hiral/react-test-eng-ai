import React from 'react';
// material ui
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
// prop types
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
    padding: '20px',
    maxWidth: '100%'
  },
  media: {
    height: 140
  }
});

/**
 * PostCard Component
 * @param {*} props
 */
export default function PostCard(props) {
  const classes = useStyles();
  const { posts } = props;
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {posts && posts.title}
          </Typography>
          {posts && posts.url && (
            <Typography variant="body2" color="textSecondary" component="p">
              <Link href={posts && posts.url} target="_blank" rel="noreferrer">
                {posts && posts.url}
              </Link>
            </Typography>
          )}
          <Typography variant="body2" color="textSecondary" component="p">
            Date: {posts && posts.created_at}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Author: {posts && posts.author}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Points : {posts && posts.points}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

/* initialize proptypes criteria */
PostCard.propTypes = {
  posts: PropTypes.object
};
/* initialize default props */
PostCard.defaultProps = {
  posts: {}
};
