/* eslint-disable @typescript-eslint/camelcase */

import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { SearchInput } from '../../component/SearchInput';

import ListItem from '../../component/ListItem';
import { productSelector } from '../../utils/search.reducer';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 768px;
  max-width: 1024px;
`;

const List = () => {
  const products = useSelector(productSelector.selectAll);
  const [query, setState] = useState('');

  return (
    <Container>
      <Content>
        <SearchInput />
        {products.map(product => {
          const { imp_id, name, price, product_image, update_time } = product;
          return <ListItem key={imp_id} img={product_image} title={name} price={price} />;
        })}
      </Content>
    </Container>
  );
};

export default List;
