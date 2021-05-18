import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../../config/firebase';

const Home: FC = () => {
  //const db = fire.firestore();
  db.doc('hello/world').set({hello: 'world' });
  //console.log(fire);
  return(
    <>
      <h1>Home Page</h1>
      <div>
        <div><Link to="/login">Login</Link></div>
      </div>
    </>
  );
}

export default Home;