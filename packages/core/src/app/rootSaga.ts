import { fork } from 'redux-saga/effects';
import { watchSearch } from '../features/search/utils/serach.saga';

export default function* rootSaga() {
  yield fork(watchSearch);
}
