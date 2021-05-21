import React, { FC, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { db } from '../../config/firebase';
import {AppContext} from '../../components/AppProvider/AppContext';
import { auth } from '../../config/firebase';

const Home: FC = () => {
  //const db = fire.firestore();
  db.doc('hello/world').set({hello: 'world' });
  //console.log(fire);
  const { currentUser } = useContext(AppContext);
  if(currentUser) {
    return <Redirect to='/dashboard' />
  }
  return(
    <>
      <h1>Home Page</h1>
      <div>
        <div><Link to="/login">Login</Link></div>
        <div><Link to="/register">Register New User</Link></div>
      </div>
    </>
  );
}

export default Home;