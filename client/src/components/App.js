import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Home';
import Dashboard from './Dashboard';
import PracticeTimer from './PracticeTimer';
import NewPractice from './NewPractice';
import NewLog from './NewLog';
import Logs from './Logs';
import SpecificLog from './SpecificLog';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/new_practice" component={NewPractice} />
            <Route path="/timer" component={PracticeTimer} />
            <Route path="/new_log" component={NewLog} />
            <Route path="/logs/:id" component={SpecificLog} />
            <Route exact path="/logs" component={Logs} />
            <Route exact path="/" component={Home} />
            <Route exact path="/#" component={Home} /> {/*DO I NEED THIS*/}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
