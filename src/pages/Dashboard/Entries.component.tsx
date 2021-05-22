import React from 'react';
import styled from '@emotion/styled';
import { borderColor, fontColor, buttonBackground, buttonBorder } from '../../styles/variables';
import { formatTime } from '../../components/Timer/helper';

const Container = styled.div`
  padding: 0px 80px;
`;
const Heading = styled.h1`
  font-weight: lighter;
  margin: 0;
  color: ${fontColor};
`;
const Entry = styled.div`
  border: 1px solid ${borderColor};
  margin: 20px 0px;
  padding: 10px;
  border-radius: 3px;
  display: grid;
  grid-template-columns: 10fr 2fr;
  min-height: 80px;
`;
const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const MetaDataContainer = styled.div`
  display: flex;
  flex-direction: row nowrap;
  justify-content: space-between;
`;
const TimeContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  color: #888888;
  font-weight: lighter;
`;
const EntryHeader = styled.h3`
  margin: 0;
  color: ${fontColor};
  font-size: 24px;
`;

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

  return(
    <Container>
      <Heading>Previous Entries</Heading>
      <div>
        {SAMPLE_DATA.map((entry, i) => (
          <Entry>
            <DescriptionContainer>
              <EntryHeader>{entry.description}</EntryHeader>
              <MetaDataContainer>
                <div style={{display: "flex", alignContent: "center"}}>
                  <svg height="30" width="30">
                    <circle cx="15" cy="15" r="14" stroke={buttonBorder} stroke-width="2" fill={buttonBackground} />
                  </svg>
                  <span style={{lineHeight: '30px', paddingLeft: '10px', color: buttonBorder}}>{entry.project}</span>
                </div>
                <div style={{display: "flex", alignContent: "center"}}>
                  <svg height="30" width="30">
                    <circle cx="15" cy="15" r="14" stroke="#feb253" stroke-width="2" fill="#F9deb1" />
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