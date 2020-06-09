import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {getApiHost} from './Config';
import YddRequestList from './components/YddRequestList';
import Header from './components/Header';
import Container from '@material-ui/core/Container';

export default function App() {
  const baseUrl = getApiHost();
  const [requests, setRequests] = useState([]);
  const [update, setUpdate] = useState(false);

  const deleteRequest = requestId => {
    console.log('delete requested', requestId)
    axios.delete(baseUrl + '/api/requests/' + requestId)
      .then(res => {
        setUpdate(true);
      })
  }

  const addRequest = (request) => {
    axios.post(baseUrl + '/api/requests', request)
      .then(res => {
        console.log('submitted')
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
    <Container>
      <Header onAdd={(request) => addRequest(request)} onClear={() => clearCompletedRequests()} />
      <YddRequestList requests={requests} onDelete={(requestId) => deleteRequest(requestId)} />
    </Container>
  );
}

