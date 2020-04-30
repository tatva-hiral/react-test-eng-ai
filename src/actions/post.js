import { postActions } from '../constants/actions';

// post actions
export const setLoader = payload => ({
  type: postActions.SET_LOADER,
  payload
});

export const getPostRequest = page => ({
  type: postActions.GET_POST_REQUEST,
  payload: page
});

export const setPostRequest = (posts, totalPages) => ({
  type: postActions.SET_POST_REQUEST,
  posts,
  totalPages
});
