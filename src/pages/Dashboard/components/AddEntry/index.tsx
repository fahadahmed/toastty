import React, { useState, useContext } from 'react';
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
import { db } from '../../../../config/firebase';
import { AppContext } from '../../../../components/AppProvider/AppContext';

const isItemInArray = (item: string, array: Array<string>) => {
  const itemExists = array.includes(item);
  return itemExists;
}

const AddEntry = () => {
  const { timer, isActive, handleStart, handleReset } = useTimer();
  const { currentUser } = useContext(AppContext);

  const addToDB = async (
    description: string,
    project: string,
    client: string,
    timer: number
  ) => {
    if (description === '') description = 'Unnamed Task';
    if (project === '') project = 'Unnamed Project';

    let entry = {
      description,
      project,
      client,
      timer
    }

    const userData = await db.collection('userData').doc(currentUser.uid).get();
    let { entries, clients, projects } = userData.data();
    entries.push(entry);
    if (client !== '') {
      const clientExists = isItemInArray(client, clients);
      if (!clientExists) clients.push(client);
    }
    if (project !== 'Unnamed Project') {
      const projectExists = isItemInArray(project, projects);
      if (!projectExists) projects.push(project);
    };
    const dbWrite = db.collection('userData').doc(currentUser.uid).set({
      entries,
      projects,
      clients,
      tags: []
    });
    if(dbWrite) {
      console.log("Record updated");
    }
  }

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
    addToDB(description, project, client, timer);
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