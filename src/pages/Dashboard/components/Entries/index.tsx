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
  const [entries, setEntries] = useState(SAMPLE_DATA);
  const { currentUser } = useContext(AppContext);
  const [userData, setUserData] = useState(null);

  const fetchData = () => {
    db.collection('userData')
    .get()
    .then(collection => {
      collection.docs.map(item => {
        if(currentUser.uid === item.id) {
          setUserData({
            id: item.id,
            data: item.data()
          })
        }
      });
    })
    .catch(err => {
      console.log(err.message);
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(userData);

  return(
    <Container>
      <Heading>Previous Entries</Heading>
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
            <TimeContainer>{formatTime(entry.time)}</TimeContainer>
          </Entry>
        ))}
      </div>
    </Container>
  );
}

export default Entries;