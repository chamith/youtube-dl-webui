import React from 'react';
import './App.css';
import axios from 'axios';
import Config from './Config';

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
        <div className="divTable">
          <div className="divTableHeading">
            <div className="divTableHead">URL</div><div className="divTableHead">Progress</div><div className="divTableHead">Actions</div>
          </div>
          <div className="divTableBody">
            {
              this.state.requests.map((request) => (
                <div key={request.id}>
                  <div className="divTableRow">
                    <div className="divTableCell">{request.url}</div>
                    <div className="divTableCell">{request.avgPrg}</div>
                    <div className="divTableCell"><a href="#area">details</a></div>
                  </div>
                  <div className="divTableRow">
                    <div className="divTableCell">
                      <div className="divTable">
                        {request.items.map(item => (
                        <div key={item.id} className="divTableRow">
                          <div className="divTableCell">{item.title}</div>
                          <div className="divTableCell">{item.status}</div>
                          <div className="divTableCell">{item.progress}</div>
                        </div>))}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div></div>
      </div>
    );
  }
}

export default App;
