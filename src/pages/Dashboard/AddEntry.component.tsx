import React, { useState } from 'react';
import styled from '@emotion/styled';
import { borderColor } from '../../styles/variables';

const Container = styled.div`
  padding: 40px 80px;
`;

const Form = styled.form`
  border: 1px solid ${borderColor};
  border-radius: 3px;
  padding: 10px;
  min-height: 100px;
  display: grid;
  grid-template-columns: 9fr 3fr;
  grid-gap: 30px;
`;
const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const DescriptionInput = styled.input`
  border: none;
  padding: 10px;
  border-bottom: 1px solid ${borderColor};
  font-size: 16px;
`;
const MetaDataContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
`;
const MetaDataInput = styled.input`
  border: 1px solid ${borderColor};
  padding: 10px;
  border-radius: 3px;
  font-size: 14px;
`;
const TimerContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
`;

const AddEntry = () => {

  const [makeEntry, setMakeEntry] = useState(false);

  const handleSubmission = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log("We need to submit the data now");
  }

  const startTimer = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log("We need to start the timer and hide this button and show the submit button");
    setMakeEntry(true);
  }
  return(
    <Container>
      <Form onSubmit={handleSubmission}>
        <TaskContainer>
          <DescriptionInput type="text" name="description" placeholder="What are you working on?" />
          <MetaDataContainer>
            <MetaDataInput type="text" name="project" placeholder="project name" />
            <MetaDataInput type="text" name="client" placeholder="client name" />
          </MetaDataContainer>
        </TaskContainer>
        <TimerContainer>
          <span>00:00</span>
          {!makeEntry
            ? <button type="button" onClick={startTimer}>Start</button>
            : <button type="submit">Submit</button>
          }
        </TimerContainer>
      </Form>
    </Container>
  );
}

export default AddEntry;