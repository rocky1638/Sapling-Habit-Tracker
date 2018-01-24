import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Home';
import Dashboard from './Dashboard';
import NewPractice from './NewPractice';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/new_practice" component={NewPractice} />
          <Route exact path="/" component={Home} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
