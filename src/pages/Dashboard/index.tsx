import React, { useContext } from 'react';
import { auth } from '../../config/firebase';
import { AppContext } from '../../components/AppProvider/AppContext';
import Timer from '../../components/Timer';

function Dashboard(): JSX.Element {
  const { currentUser } = useContext(AppContext);
  console.log(currentUser);
  return(
    <div>
      <h1>Dashboard Page</h1>
      <button onClick={() => auth().signOut()}>Log out</button>
      <h2>{currentUser.displayName}</h2>
      <Timer />
    </div>
  )
}

export default Dashboard;