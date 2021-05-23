import React, { useState } from 'react';
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

const Entries = () => {
  const [entries, setEntries] = useState(SAMPLE_DATA);

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