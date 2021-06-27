import React, { useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {AppContext} from '../../components/AppProvider/AppContext';
import { auth } from '../../config/firebase';
import { 
  Container,
  Card,
  PublicForm,
  FormInput,
  FormButton
} from '../../styles/common.styles';

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
    auth().signInWithEmailAndPassword(email, password)
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
    <Container>
      <Card>
        <h1>Login Page</h1>
        <div>
          <Link to='/home'>Home Page</Link>
          <PublicForm onSubmit={handleLogin}>
            <FormInput type="email" placeholder="email address" name="email" required />
            <FormInput type="password" placeholder="password" name="password" required />
            <FormButton type="submit">Login</FormButton>
            {error !== null && <p>Error: {error}</p>}
          </PublicForm>
        </div>
      </Card>
    </Container>
  )
}

export default Login;