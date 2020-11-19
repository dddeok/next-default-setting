import React from 'react';
import styled from 'styled-components';

interface ImageProps {
  img?: string;
}
const Contaeinr = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  padding: 0px 10px;
  margin-bottom: 12px;

  .list-item-title {
    font-size: 12px;
    padding-bottom: 4px;
  }
  .list-item-price {
    font-size: 13px;
    font-weight: 500;
  }
`;

const ProductImage = styled.div<ImageProps>`
  width: 320px;
  height: 300px;
  background-size: cover;
  background-image: ${props => (props.img ? `url(${props.img})` : null)};
`;

interface Props {
  img?: string;
  title: string;
  price: string;
}
const ListItem = ({ img, title, price }: Props) => {
  return (
    <Contaeinr>
      <ProductImage img={img} />
      <span className="list-item-title">{title}</span>
      <span className="list-item-price">{price}</span>
    </Contaeinr>
  );
};

export default ListItem;
