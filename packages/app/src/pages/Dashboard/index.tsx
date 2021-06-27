import React from 'react';
import Header from '../../components/Header';
import AddEntry from './components/AddEntry';
import Entries from './components/Entries';

function Dashboard(): JSX.Element {
  return(
    <div>
      <Header />
      <AddEntry />
      <Entries />
    </div>
  )
}

export default Dashboard;