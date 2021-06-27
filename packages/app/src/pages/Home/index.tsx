import React, { FC, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import {AppContext} from '../../components/AppProvider/AppContext';
import {
  Container,
  Card,
  LinkButton
} from '../../styles/common.styles';

const Home: FC = () => {
  
  const { currentUser } = useContext(AppContext);
  if(currentUser) {
    return <Redirect to='/dashboard' />
  }
  return(
    <Container>
      <Card>
        <h1>Toastty</h1>
        <p>A time tracking app to make you productive.</p>
        <LinkButton to="/login">Login</LinkButton>
        <LinkButton to="/register">Register New User</LinkButton>
      </Card>
    </Container>
  );
}

export default Home;