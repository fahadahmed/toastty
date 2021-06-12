import React, { useState, useEffect, useContext } from 'react';
import useTimer from '../../../../components/Timer/useTimer';
import { formatTime } from '../../../../components/Timer/helper';
import PlayIcon from '../../../../assets/icons/play-circle-solid.svg';
import StopIcon from '../../../../assets/icons/stop-circle-solid.svg';
import {
  Container,
  Form,
  TimerContainer,
  Button
} from './styles';
import { db } from '../../../../config/firebase';
import { AppContext } from '../../../../components/AppProvider/AppContext';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {IUserData} from '../../../../models/UserData';
import Grid from '@material-ui/core/Grid';
import ChipInput from 'material-ui-chip-input';
import { TagFacesTwoTone } from '@material-ui/icons';

const isItemInArray = (item: string, array: Array<string>) => {
  const itemExists = array.includes(item);
  return itemExists;
}

const AddEntry = () => {
  const { timer, isActive, handleStart, handleReset } = useTimer();
  const { currentUser } = useContext(AppContext);
  const [user, setUser] = useState<IUserData|null>(null);
  const [tags, setTags] = useState([]);

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
      timer,
      tags
    }

    const userData = await db.collection('userData').doc(currentUser.uid).get();
    let { entries, clients, projects } = userData.data();
    let masterTags = userData.data().tags;
    entries.push(entry);
    if (client !== '') {
      const clientExists = isItemInArray(client, clients);
      if (!clientExists) clients.push(client);
    }
    if (project !== 'Unnamed Project') {
      const projectExists = isItemInArray(project, projects);
      if (!projectExists) projects.push(project);
    };
    if(tags.length > 0) {
      tags.forEach(tag => {
        const tagExists = isItemInArray(tag, masterTags);
        if(!tagExists) masterTags.push(tag);
      })
    }
    const dbWrite = db.collection('userData').doc(currentUser.uid).set({
      entries,
      projects,
      clients,
      tags: masterTags
    });
    if(dbWrite) {
      console.log("Record updated");
    }
  }

  const handleSubmission = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      description: {value: string },
      project: { value: string },
      client: { value: string }
    };

    const description = target.description.value;
    const project = target.project.value;
    const client = target.client.value;
    addToDB(description, project, client, timer);
    // e.target.reset();
    handleReset();
  }

  const startTimer = (e: React.SyntheticEvent) => {
    e.preventDefault();
    handleStart();
  }

  const fetchUserDetails = async() => {
    const userData = await db.collection('userData').doc(currentUser.uid).get();
    setUser({
      entries: userData.data().entries,
      projects: userData.data().projects,
      clients: userData.data().clients,
      tags: userData.data().tags
    });
  }

  const handleAddTag = (e: React.SyntheticEvent) => {
    let updatedTags = [...tags];
    updatedTags.push(e);
    setTags([...updatedTags]);
  }

  const handleDeleteTag = (chip: string, index:number) => {
    let updatedTags = [...tags];
    updatedTags.splice(index, 1);
    setTags([...updatedTags]);
  }

  useEffect(() => {
    fetchUserDetails();
  },[]);

  return(
    <Container>
      <Form onSubmit={handleSubmission} name="AddEntryForm">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="What are you working on?"
              name="description"
              variant="outlined"
              fullWidth
              autoComplete="off"
            />
          </Grid>
          <Grid item xs={6}>
          <Autocomplete 
              id="combo-projects"
              options={user ? user.projects : []}
              getOptionLabel={option => option}
              freeSolo={true}
              renderInput={
                (params) =>
                  <TextField {...params} label="Project Name" variant="outlined" name="project" />
              }
            />
            
          </Grid>
          <Grid item xs={6}>
          <Autocomplete 
              id="combo-clients"
              options={user ? user.clients : []}
              getOptionLabel={option => option}
              freeSolo={true}
              renderInput={
                (params) =>
                  <TextField {...params} label="Client Name" variant="outlined" name="client" />
              }
            />
          </Grid>
          <Grid item xs={12}>
            <ChipInput 
              value={tags} 
              fullWidth 
              variant="outlined" 
              label="Add a tag" 
              onAdd={handleAddTag}
              onDelete={(chip, index) => handleDeleteTag(chip, index)}
            />
          </Grid>
        </Grid>
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