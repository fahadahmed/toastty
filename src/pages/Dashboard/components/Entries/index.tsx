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
import { db } from '../../../../config/firebase';
import { AppContext } from '../../../../components/AppProvider/AppContext';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/EditOutlined';
import DeleteIcon from '@material-ui/icons/DeleteOutline';
import { IEntry } from '../../../../models/Entry';
import EditEntry from '../EditEntry';

const Entries = () => {
  const [entries, setEntries] = useState([]);
  const [userData,setUserData] = useState(null);
  const { currentUser } = useContext(AppContext);
  const [open, setOpen] = useState(-1);

  const handleClose = () => {
    setOpen(-1);
  }

  const fetchData = () => {
    db.collection('userData')
    .doc(currentUser.uid)
    .onSnapshot(result => {
      setEntries(result.data().entries);
      setUserData(result.data());
    });
  }

  const deleteEntry = (index: number, entriesCopy: IEntry[]) => {
    handleClose();
    entriesCopy.splice(index, 1);
    setEntries([...entriesCopy]);
    const dbWrite = db.collection('userData').doc(currentUser.uid).set({
      tags: [],
      projects: userData.projects,
      clients: userData.clients,
      entries: entries
    })
    if(dbWrite) {
      console.log("Record with entries updated");
    }
    
  }
  const editEntry = (index: number) => {
    console.log(index);
    setOpen(index);
  }

  useEffect(() => {
    fetchData();
  }, []);

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
                 {entry.client === '' 
                  ? <div></div>
                  :  <div style={{display: "flex", alignContent: "center"}}>
                      <svg height="30" width="30">
                        <circle cx="15" cy="15" r="14" stroke="#feb253" strokeWidth="2" fill="#F9deb1" />
                      </svg>
                      <span style={{lineHeight: '30px', paddingLeft: '10px', color: "#feb253"}}>{entry.client}</span>
                    </div>
                  }
                  <div></div>
                </MetaDataContainer>
              </DescriptionContainer>
              <TimeContainer>{formatTime(entry.timer)}</TimeContainer>
              <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <IconButton onClick={() => deleteEntry(i, entries)}>
                  <DeleteIcon/>
                </IconButton>
                <IconButton onClick={() => editEntry(i)}>
                  <EditIcon/>
                </IconButton>
                {(open === i) && <EditEntry open={open === i} handleClose={handleClose} selectedEntry={entry} index={i} />}
              </div>
            </Entry>
          ))}
        </div>
      }
      {entries.length === 0 && <div>Create a new time entry for a project.</div>}
      
    </Container>
  );
}

export default Entries;