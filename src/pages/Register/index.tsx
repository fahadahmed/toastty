import React, { useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { AppContext } from '../../components/AppProvider/AppContext';
import { auth, db } from '../../config/firebase';

import {
  Container,
  Card,
  PublicForm,
  FormInput,
  FormButton
} from '../../styles/common.styles';

function Register(): JSX.Element {

  const [error, setError] = useState(null);

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      email: { value: string };
      password: { value: string };
      name: { value: string};
    };
    const email = target.email.value;
    const password = target.password.value;
    const name = target.name.value;

    // TODO: refactor this using async await paradaigm
    auth().createUserWithEmailAndPassword(email, password)
      .then(result => {
        console.log(result.user);
        result.user.updateProfile({
          displayName: name
        })

        const collection = db.collection('userData');
        collection.doc(result.user.uid).set({
          entries: [],
          projects: [],
          clients: [],
          tags: []
        })
        .then( res => {
          console.log("User created in userData collection.");
        })
        .catch(err => {
          console.log(err.message);
        })
      })
      .catch(err => {
        console.log(err.message);
        setError(err.message);
      });
  }

  const { currentUser } = useContext(AppContext);
  if (currentUser) {
    return <Redirect to='/dashboard' />
  }

  return(
    <Container>
      <Card>
        <h1>Register New User</h1>
        <div>
          <div>
            <Link to='/home'>Home Page</Link>
          </div>
        <PublicForm onSubmit={handleSubmit}>
          <FormInput type="text" name="name" placeholder="your name" required />
          <FormInput type="email" name="email" placeholder="email address" required />
          <FormInput type="password" name="password" placeholder="password" required />
          <FormButton type="submit">Register User</FormButton>
          {error !== null && <p>Error: {error}</p>}
        </PublicForm>
        </div>
      </Card>
    </Container>
  )
}

export default Register;