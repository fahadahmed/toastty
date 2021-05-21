import React, { useContext } from 'react';

import { auth } from '../../config/firebase';
import { AppContext } from '../AppProvider/AppContext';
import * as HeaderStyles from './styles';

const Header = () => {
  const { currentUser } = useContext(AppContext);
  return (
    <HeaderStyles.Container>
      <HeaderStyles.Title>Toastty</HeaderStyles.Title>
      <div>
        <HeaderStyles.Username>{currentUser.displayName}</HeaderStyles.Username>
        <HeaderStyles.LogoutBtn 
          onClick={() => auth().signOut()}
        >
          Log out
        </HeaderStyles.LogoutBtn>
      </div>
    </HeaderStyles.Container>
  );
};

export default Header;