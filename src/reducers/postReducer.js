// import redux actions constant
import { postActions } from '../constants/actions';

const initialState = {
  posts: [],
  loading: false,
  totalPages: 0
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case postActions.SET_LOADER:
      return { state, loading: action.payload };

    case postActions.SET_POST_REQUEST:
      return { state, posts: [...state.posts, ...action.posts], totalPages: action.totalPages };
    default:
      return state;
  }
};

export default postReducer;
