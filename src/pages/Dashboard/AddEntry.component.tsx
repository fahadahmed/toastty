import React, { useState } from 'react';
import styled from '@emotion/styled';
import { borderColor, fontColor } from '../../styles/variables';
import useTimer from '../../components/Timer/useTimer';
import { formatTime } from '../../components/Timer/helper';
import PlayIcon from '../../assets/icons/play-circle-solid.svg';
import StopIcon from '../../assets/icons/stop-circle-solid.svg';

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
  font-size: 36px;
  color: ${fontColor};
  font-weight: lighter;
`;
const Button = styled.button`
  background: none;
  border: none;
`;

const AddEntry = () => {
  const [entry, setEntry] = useState(null);
  const { timer, isActive, handleStart, handleReset } = useTimer();

  const handleSubmission = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      description: {value: string },
      project: { value: string };
      client: { value: string };
    };

    const description = target.description.value;
    const project = target.project.value;
    const client = target.client.value;
    console.log(description, project, client, timer);
    handleReset();
  }

  const startTimer = (e: React.SyntheticEvent) => {
    e.preventDefault();
    handleStart();
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
          <span>{formatTime(timer)}</span>
          {!isActive
            ? <Button type="button" onClick={startTimer}>
              <img src={PlayIcon} alt="Play" width="50" />
            </Button>
            : <Button type="submit">
              <img src={StopIcon} alt="Stop" width="50" />
            </Button>
          }
        </TimerContainer>
      </Form>
    </Container>
  );
}

export default AddEntry;