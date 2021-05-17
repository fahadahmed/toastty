import React from 'react';
import { Link } from 'react-router-dom';

function Login(): JSX.Element {
  return(
    <>
      <h1>Login Page</h1>
      <div>
        <Link to='/home'>Home Page</Link>
      </div>
    </>
  )
}

export default Login;