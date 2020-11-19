/* eslint-disable @typescript-eslint/camelcase */
import { createAction, createReducer, createEntityAdapter } from '@reduxjs/toolkit';
import { Product } from './seach.interface';
import { RootState } from '../../../app/rootReducer';
export const getSearchStart = createAction(
  'getSearchStart',
  (q: string, order: string) => {
    return {
      payload: { q, order },
    };
  },
);

export const getSearchSuccess = createAction('getSearchSuccess', (list: Product[]) => {
  return {
    payload: list,
  };
});

export const getAutoCompleteStart = () =>
  createAction('getAutoCompleteStart', () => {
    return {
      payload: null,
    };
  });

export const getAutoCompleteSuccess = () =>
  createAction('getAutoCompleteSuccess', () => {
    return {
      payload: null,
    };
  });

const productAdapter = createEntityAdapter<Product>({
  selectId: item => item.imp_id,
});

const initailState = productAdapter.getInitialState({});

const reducer = createReducer(initailState, {
  [getSearchSuccess.type]: (state, action) => {
    const list = action.payload;
    productAdapter.setAll(state, list);
  },
});

export default reducer;

export const productSelector = productAdapter.getSelectors<RootState>(
  (state: RootState) => state.search,
);
