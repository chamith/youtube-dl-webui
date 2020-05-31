import React from 'react';
import './App.css';
import axios from 'axios';
import Config from './Config';
import YddRequestList from './components/YddRequestList';
import Header from './components/Header';

class App extends React.Component {
  baseUrl = new Config().getApiHost();

  deleteRequest = requestId => {
    console.log('delete requested', requestId)
    axios.delete(this.baseUrl + '/api/requests/'+requestId)
      .then(res => {
        this.getRequests()
      })
  }

  addRequest = (request) => {
    axios.post(this.baseUrl + '/api/requests', request)
    .then(res => {
      console.log('submitted')
      this.getRequests()

    })
  }
  avgPrg = (request) => {
    let sum = 0;
    request.items.forEach(item => sum += item.progress)
    return request.items == null || request.items.length === 0 ? 0: sum / request.items.length;
  };

  getRequests = () => {
    axios.get(this.baseUrl + '/api/requests')
      .then(res => {
        const requests = res.data
        requests.map((request) => {
          request.avgPrg = this.avgPrg(request)
          //console.log(`url:${request.url}, average:${request.avgPrg}`)
          return request;
        });
        this.setState({ requests: requests })
      })
  }
  state = {
    requests: []
  }
  componentDidMount() {
    this.getRequests();

    setInterval(this.getRequests, 5000); // runs every 5 seconds.
  }


  render() {
    return (
      <div className="App">
        <Header onAdd={(request)=>this.addRequest(request)}/>
        <YddRequestList requests={this.state.requests} onDelete={(requestId)=>this.deleteRequest(requestId)}/>
      </div>
    );
  }
}

export default App;
