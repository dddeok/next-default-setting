import { combineReducers } from '@reduxjs/toolkit';
import searchReducer from '../features/search/utils/search.reducer';
const rootReducer = combineReducers({
  search: searchReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
