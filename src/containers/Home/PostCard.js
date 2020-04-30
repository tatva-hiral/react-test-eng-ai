import React from 'react';
// material ui
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
// prop types
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
    padding: '10px 10px',
    maxWidth: 350,
    height: 350
  },
  media: {
    height: 140
  },
  link: {
    padding: '10px 10px'
  }
});

/**
 * PostCard Component
 * @param {*} props
 */
export default function PostCard(props) {
  const classes = useStyles();
  const { posts, viewMore } = props;
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {posts && posts.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className="link">
            <Link href={posts && posts.url} target="_blank" rel="noreferrer">
              {posts && posts.url}
            </Link>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {posts && posts.created_at}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {posts && posts.author}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={viewMore}>
          View More
        </Button>
      </CardActions>
    </Card>
  );
}

/* initialize proptypes criteria */
PostCard.propTypes = {
  posts: PropTypes.object,
  viewMore: PropTypes.func
};
/* initialize default props */
PostCard.defaultProps = {
  posts: {}
};
