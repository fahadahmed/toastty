import React, { ReactNode, FC, useState, useEffect } from 'react';
import fire from '../../config/firebase';

export const AppContext = React.createContext(null);

type Props = {
  children: ReactNode
}

export const AppProvider: FC<Props> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  useEffect(() => {
    fire.auth().onAuthStateChanged(setCurrentUser);
  }, []);

  return(
    <AppContext.Provider value={{currentUser, showSidebar, toggleSidebar}}>
      {children}
    </AppContext.Provider>
  )
};