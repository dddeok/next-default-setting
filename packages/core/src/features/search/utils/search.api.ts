/* eslint-disable @typescript-eslint/camelcase */
import makeRequest from '../../../api/makeRequest';
import { Product } from '../utils/seach.interface';
export const getSearch = (q: string, order: string) =>
  makeRequest<any>({
    method: 'get',
    url: `https://api.stg-bunjang.co.kr/api/1/find_v2.json`,
    query: {
      q,
      order,
    },
  });

export const autoCompleteSearch = ({ name: string }) =>
  makeRequest<any>({
    method: 'get',
    url: `https://staging.withsellit.com/api/v1/interview/autocomplete`,
    query: {
      name,
    },
  });
