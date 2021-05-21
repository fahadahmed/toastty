import React, { useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {AppContext} from '../../components/AppProvider/AppContext';
import { auth } from '../../config/firebase';

function Login(): JSX.Element {
  const [error, setError] = useState(null);
  
  const handleLogin = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      email: { value: string };
      password: { value: string };
    };
    const email = target.email.value;
    const password = target.password.value;
    const lgn = auth().signInWithEmailAndPassword(email, password)
    .catch(err => {
      console.log(err);
      setError(err.message);
    })
  };

  const { currentUser } = useContext(AppContext);
  if(currentUser) {
    return <Redirect to='/dashboard' />
  }

  return(
    <>
      <h1>Login Page</h1>
      <div>
        <Link to='/home'>Home Page</Link>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="email address" name="email" required />
          <input type="password" placeholder="password" name="password" required />
          <button type="submit">Login</button>
          {error !== null && <p>Error: {error}</p>}
        </form>
      </div>
    </>
  )
}

export default Login;