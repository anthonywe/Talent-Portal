import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ActiveNavBar from './ActiveNavBar';
import Companies from './Companies';
import Home from './Home';
import Jobs from './Jobs';

import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/Companies' component={Companies}/>
          <Route path='/Jobs' component={Jobs}/>
        </Switch>
      </Router>

    );
  }
}

export default App;
