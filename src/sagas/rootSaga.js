import { all, fork } from 'redux-saga/effects';
import appSaga from './appSaga';
import postSaga from './postSaga';

const forkList = sagasList => sagasList.map(saga => fork(saga));

export default function* rootSaga() {
  yield all([...forkList(appSaga), ...forkList(postSaga)]);
}
