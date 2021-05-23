import React, { FC, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {AppContext} from '../../components/AppProvider/AppContext';

const Home: FC = () => {
  
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