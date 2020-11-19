import { takeEvery, all, put } from 'redux-saga/effects';
import { call } from 'typed-redux-saga';
import { getSearch } from '../utils/search.api';
import {
  getSearchStart,
  getSearchSuccess,
  getAutoCompleteStart,
  getAutoCompleteSuccess,
} from './search.reducer';

function* getSearchSaga(action: ReturnType<typeof getSearchStart>) {
  try {
    const { q, order } = action.payload;
    const { list } = yield* call(getSearch, order, q);
    yield put(getSearchSuccess(list));
  } catch (err) {
    console.log(err.message);
  }
}

export function* watchSearch() {
  yield all([takeEvery(getSearchStart, getSearchSaga)]);
}
