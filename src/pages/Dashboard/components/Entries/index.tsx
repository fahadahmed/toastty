import React, { useState, useEffect, useContext } from 'react';
import { buttonBackground, buttonBorder } from '../../../../styles/variables';
import { formatTime } from '../../../../components/Timer/helper';
import {
  Container,
  EntryHeader,
  Entry,
  DescriptionContainer,
  MetaDataContainer,
  TimeContainer,
  Heading
} from './styles';
import { db, auth } from '../../../../config/firebase';
import { AppContext } from '../../../../components/AppProvider/AppContext';

const SAMPLE_DATA = [
  {
    description: "Sample Description",
    project: "Test Project",
    client: "Test Client",
    time: 1000
  },
  {
    description: "Sample Description",
    project: "Test Project",
    client: "Test Client 2",
    time: 150
  },
  {
    description: "Sample Description",
    project: "Test Project",
    client: "Test Client",
    time: 390
  },
  {
    description: "Sample Description",
    project: "Test Project",
    client: "Test Client 3",
    time: 800
  }
]

interface UserData {
  id: string;
  data:{
    entries: [],
    tags: [],
    clients: [],
    projects: []
  }
};

const Entries = () => {
  const [entries, setEntries] = useState([]);
  const { currentUser } = useContext(AppContext);
  const [userData, setUserData] = useState(null);

  const fetchData = async () => {
    const result = await db.collection('userData')
    .doc(currentUser.uid)
    .get();
    setEntries(result.data().entries);
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(userData);

  return(
    <Container>
      <Heading>Previous Entries</Heading>
      {entries.length > 0 &&
        <div>
          {entries.map((entry, i) => (
            <Entry key={i}>
              <DescriptionContainer>
                <EntryHeader>{entry.description}</EntryHeader>
                <MetaDataContainer>
                  <div style={{display: "flex", alignContent: "center"}}>
                    <svg height="30" width="30">
                      <circle cx="15" cy="15" r="14" stroke={buttonBorder} strokeWidth="2" fill={buttonBackground} />
                    </svg>
                    <span style={{lineHeight: '30px', paddingLeft: '10px', color: buttonBorder}}>{entry.project}</span>
                  </div>
                  <div style={{display: "flex", alignContent: "center"}}>
                    <svg height="30" width="30">
                      <circle cx="15" cy="15" r="14" stroke="#feb253" strokeWidth="2" fill="#F9deb1" />
                    </svg>
                    <span style={{lineHeight: '30px', paddingLeft: '10px', color: "#feb253"}}>{entry.client}</span>
                  </div>
                  <div></div>
                </MetaDataContainer>
              </DescriptionContainer>
              <TimeContainer>{formatTime(entry.timer)}</TimeContainer>
            </Entry>
          ))}
        </div>
      }
      {entries.length === 0 && <div>Create a new time entry for a project.</div>}``
    </Container>
  );
}

export default Entries;