import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const Home: FC = () => {
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