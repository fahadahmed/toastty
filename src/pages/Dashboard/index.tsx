import React, { useState, useContext } from 'react';
import { auth } from '../../config/firebase';
import { AppContext } from '../../components/AppProvider/AppContext';
import Timer from '../../components/Timer';
import Header from '../../components/Header';

function Dashboard(): JSX.Element {
  const { currentUser } = useContext(AppContext);
  const [entries, setEntries] = useState([]);
  console.log(currentUser);

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
      <h1>Dashboard Page</h1>
      <button onClick={() => auth().signOut()}>Log out</button>
      <h2>{currentUser.displayName}</h2>
      

      <div>
        <h3>Add Entry</h3>
        <form onSubmit={handleNewEntry}>
          <input type="text" placeholder="Project Name" name="project" />
          <input type="text" placeholder="Client Name" name="client" />
          <button type="submit">Add Entry</button>
          <Timer />
        </form>
      </div>
      <div>
        <h3>Recorded Entries</h3>
        <ul>
          {entries.map((entry, i) => (
            <li key={i}>{entry.user} - {entry.project} - {entry.client}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Dashboard;