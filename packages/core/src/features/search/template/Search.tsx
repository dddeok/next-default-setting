import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import Header from '../container/header/Header';
import List from '../container/list/List';

import { getSearchStart } from '../utils/search.reducer';
const Contaienr = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Search = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState({
    order: 'recent',
    q: '',
  });

  useEffect(() => {
    dispatch(getSearchStart('date', '아이폰'));
  }, []);

  function onInputChange(q: string) {
    setQuery({
      ...query,
      q: q,
    });
  }

  return (
    <Contaienr>
      <Header />
      <List />
    </Contaienr>
  );
};

export default Search;
