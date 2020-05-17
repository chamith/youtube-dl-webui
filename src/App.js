import React from 'react';
import './App.css';
import axios from 'axios';
import Config from './Config';
import RequestList from './components/RequestList';

class App extends React.Component {
  baseUrl = new Config().getApiHost();

  getProgressAvg(request) {
    let sum = 0;
    request.items.forEach(function (item) {
      sum += item.progress;
    })
    return sum / request.items.length
  }

  avgPrg = (request) => {
    let sum = 0;
    request.items.forEach(item => sum += item.progress)
    return sum / request.items.length;
  };

  state = {
    requests: []
  }
  componentDidMount() {
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


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Add
        </a>
        </header>
        <RequestList requests={this.state.requests}/>
      </div>
    );
  }
}

export default App;
