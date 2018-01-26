import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Home';
import Dashboard from './Dashboard';
import NewPractice from './NewPractice';
import Logs from './Logs';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/new_practice" component={NewPractice} />
          <Route path="/logs" component={Logs} />
          <Route exact path="/" component={Home} />
          <Route exact path="/#" component={Home} /> {/*DO I NEED THIS*/}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
