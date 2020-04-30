// import external libraries
import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import appReducer from './appReducer';
import postReducer from './postReducer';

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    app: appReducer,
    post: postReducer
  });

export default rootReducer;
