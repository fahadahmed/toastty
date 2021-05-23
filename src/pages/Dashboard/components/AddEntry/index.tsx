import React, { useState } from 'react';
import useTimer from '../../../../components/Timer/useTimer';
import { formatTime } from '../../../../components/Timer/helper';
import PlayIcon from '../../../../assets/icons/play-circle-solid.svg';
import StopIcon from '../../../../assets/icons/stop-circle-solid.svg';
import {
  Container,
  Form,
  TaskContainer,
  DescriptionInput,
  MetaDataContainer,
  MetaDataInput,
  TimerContainer,
  Button
} from './styles';

const AddEntry = () => {
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