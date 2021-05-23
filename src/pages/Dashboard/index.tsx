import React, { useState, useContext } from 'react';
import { AppContext } from '../../components/AppProvider/AppContext';
import Timer from '../../components/Timer';
import Header from '../../components/Header';
import AddEntry from './components/AddEntry';
import Entries from './components/Entries';

function Dashboard(): JSX.Element {
  const { currentUser } = useContext(AppContext);
  const [entries, setEntries] = useState([]);
  
  const handleNewEntry = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      project: { value: string };
      client: { value: string };
    };

    const project = target.project.value;
    const client = target.client.value;

    const entry = { project, client, user: currentUser.displayName };
    setEntries(prevState => ([
      ...prevState,
      entry
    ]));
  }
  return(
    <div>
      <Header />
      <AddEntry />
      <Entries />
    </div>
  )
}

export default Dashboard;