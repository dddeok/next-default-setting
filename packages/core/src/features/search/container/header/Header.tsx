import React from 'react';
import styled from 'styled-components';

const Contaienr = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;

  padding: 12px;
  .header-title {
    font-size: 14px;
    font-weight: 500;
  }
`;

const Header = () => {
  return (
    <Contaienr>
      <span className="header-title">번개장터</span>
    </Contaienr>
  );
};

export default Header;
