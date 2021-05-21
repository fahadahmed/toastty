import React from 'react';
import styled from '@emotion/styled';

const borderColor = '#d9e0e5';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row nowrap;
  border-bottom: 1px solid ${borderColor};
`;
const Header = () => (
  <HeaderContainer>
    <div>Toastty</div>
    <div>
      <span>John Smith</span>
      <button>Log out</button>
    </div>
  </HeaderContainer>
);

export default Header;