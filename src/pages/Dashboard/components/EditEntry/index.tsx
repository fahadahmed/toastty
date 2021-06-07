import React, { FC, useState, useContext } from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import { IEntry } from '../../../../models/Entry';
import { formatTime } from '../../../../components/Timer/helper';
import styled from '@emotion/styled';
import { AppContext} from '../../../../components/AppProvider/AppContext';
import { db } from '../../../../config/firebase';

interface Props {
  open: boolean,
  handleClose: () => void,
  selectedEntry: IEntry,
  index: number
}

const TimeStyles = styled.span`
  padding: 0px 20px;
  font-family: sans-serif;
  font-size: 20px;
  font-weight: bold;
`;

const EditEntry:FC<Props> = ({open, handleClose, selectedEntry, index}) => {
  const [editingEntry, setEditingEntry] = useState(selectedEntry);
  const {currentUser} = useContext(AppContext);

  const updateEntry = async () => {
    const user = await db.collection('userData').doc(currentUser.uid).get();
    let entries = [...user.data().entries];
    let updatedEntries: IEntry[] = [];
    entries.forEach((entry, i) => {
      if(i === index) {
        updatedEntries.push(editingEntry);
      } else {
        updatedEntries.push(entry);
      }
    });

    let projects = user.data().projects;
    let clients = user.data().clients;

    projects.includes(editingEntry.project) ? projects : projects.push(editingEntry.project);
    clients.includes(editingEntry.client) ? clients : clients.push(editingEntry.client);  
    const dbWrite = db.collection('userData').doc(currentUser.uid).set({
      tags: [],
      projects: projects,
      clients: clients,
      entries: updatedEntries
    })
    if(dbWrite) {
      console.log("Record with entries updated");
    }
    handleClose();
  }
  return(
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth={true}
      maxWidth={"sm"}
    >
      <DialogTitle id="alert-dialog-title">{"Edit Time Entry"}</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField 
              value={editingEntry.description} 
              fullWidth 
              variant="outlined"
              label="Description"
              onChange={e => setEditingEntry(prevState => ({
                ...prevState,
                description: e.target.value
              }))}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField 
              value={editingEntry.project}
              fullWidth
              variant="outlined"
              label="Project"
              onChange={e => setEditingEntry(prevState => ({
                ...prevState,
                project: e.target.value
              }))}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField  
              value={editingEntry.client}
              variant="outlined"
              label="Client"
              onChange={e => setEditingEntry(prevState => ({
                ...prevState,
                client: e.target.value
              }))}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={editingEntry.timer}
              variant="outlined"
              label="Time (in seconds)"
              onChange={e => setEditingEntry(prevState => ({
                ...prevState,
                timer: parseInt(e.target.value)
              }))}
            />
            <TimeStyles>{formatTime(editingEntry.timer)}</TimeStyles>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={updateEntry} color="primary" autoFocus>
          Update
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default EditEntry;