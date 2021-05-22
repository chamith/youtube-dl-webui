import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {getApiHost} from './Config';
import YddRequestList from './components/YddRequestList';
import Header from './components/Header';
import Container from '@material-ui/core/Container';
import {Fab} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Footer from './components/Footer';
import AddNewRequestModal from './components/AddNewRequestModal';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing(5),
    right: theme.spacing(5),
  }
}));

export default function App() {
  const baseUrl = getApiHost();
  const [requests, setRequests] = useState([]);
  const [update, setUpdate] = useState(false);
  const [isAddNewModalOpen, setIsAddNewModalOpen] = useState(false);

  const classes = useStyles();
  const theme = useTheme();

  const deleteRequest = requestId => {
    console.log('delete requested', requestId)
    axios.delete(baseUrl + '/api/requests/' + requestId)
      .then(res => {
        setUpdate(true);
      })
  }

  const deleteItem = itemId => {
    console.log('delete item requested', itemId)
    axios.delete(baseUrl + '/api/items/' + itemId)
      .then(res => {
        setUpdate(true);
      })
  }

  const addRequest = (request) => {
    axios.post(baseUrl + '/api/requests', request)
      .then(res => {
        console.log('submitted')
        setIsAddNewModalOpen(false);
        setUpdate(true);
      })
  }

  const clearCompletedRequests = () => {
    console.log('clear completed requested')
    axios.delete(baseUrl + '/api/requests')
      .then(res => {
        setUpdate(true);
      })
  }

  const avgPrg = (request) => {
    let sum = 0;
    request.items.forEach(item => sum += item.progress)
    return request.items == null || request.items.length === 0 ? 0 : sum / request.items.length;
  };

  const getRequests = () => {
    axios.get(baseUrl + '/api/requests')
      .then(res => {
        const requests = res.data
        requests.map((request) => {
          request.avgPrg = avgPrg(request)
          return request;
        });
        setRequests(requests);
      })
  }

  useEffect(() => {
    getRequests();
    const interval = setInterval(getRequests, 5000); // runs every 5 seconds.

    return () => clearInterval(interval);
  }, [])

  useEffect(() => {
    getRequests();
  }, [update])
  

  return (
    <>
    <Header onAdd={()=> setIsAddNewModalOpen(true)} onClear={() => clearCompletedRequests()} />
    <Container style={{marginTop:'15px', position:'relative', height:'100%'}}>
      <YddRequestList requests={requests} onDelete={(requestId) => deleteRequest(requestId)} onItemDelete={(itemId) => deleteItem(itemId)} />
      <Fab size="medium" className={classes.fab} color="primary" aria-label="add" onClick={()=> setIsAddNewModalOpen(true)}>
        <AddIcon />
      </Fab>
    </Container>
    <Footer></Footer>
    <AddNewRequestModal open={isAddNewModalOpen} onCancel={()=> setIsAddNewModalOpen(false)} onSubmit={ request => addRequest(request)}/>
    </>
  );
}

