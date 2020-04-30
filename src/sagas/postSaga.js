import { takeLatest, put, call } from 'redux-saga/effects';
import { postActions } from '../constants/actions';
import { GetPosts } from '../services/post';
import * as PostActions from '../actions/post';

// Define handlers
function* getPostHandler({ payload }) {
  try {
    // if (payload === 0) {
    //   yield put(PostActions.setLoader(true));
    // }
    const postRequestResponse = yield call(GetPosts, payload);
    // yield put(PostActions.setLoader(false));
    if (
      postRequestResponse &&
      postRequestResponse.data &&
      postRequestResponse.data.hits &&
      postRequestResponse.data.hits.length > 0
    ) {
      yield put(
        PostActions.setPostRequest(postRequestResponse.data.hits, postRequestResponse.data.nbPages)
      );
    } else {
      yield put(PostActions.setPostRequest([], 0));
    }
  } catch (error) {
    // yield put(PostActions.setLoader(false));
    console.log('getPostHandler error-->', error);
    yield put(PostActions.setPostRequest([], 0));
  }
}

// Declare watcher
function* getPostWatcher() {
  yield takeLatest(postActions.GET_POST_REQUEST, getPostHandler);
}

export default [getPostWatcher];
