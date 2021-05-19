import React from 'react';
import { auth } from '../../config/firebase';

function Dashboard(): JSX.Element {
  return(
    <div>
      <h1>Dashboard Page</h1>
      <button onClick={() => auth().signOut()}>Log out</button>
    </div>
  )
}

export default Dashboard;