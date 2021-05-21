import React, { useContext } from 'react';
import styled from '@emotion/styled';

import { auth } from '../../config/firebase';
import { AppContext } from '../AppProvider/AppContext';

const borderColor = '#d9e0e5';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row nowrap;
  border-bottom: 1px solid ${borderColor};
  justify-content: space-between;
  padding: 10px;
`;

const Header = () => {
  const { currentUser } = useContext(AppContext);
  return (
    <HeaderContainer>
      <div>Toastty</div>
      <div>
        <span>{currentUser.displayName}</span>
        <button onClick={() => auth().signOut()}>Log out</button>
      </div>
    </HeaderContainer>
  );
};

export default Header;