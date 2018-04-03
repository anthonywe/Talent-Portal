import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import NavBar from './NavBar';


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={NavBar}/>
        </Switch>
      </Router>

    );
  }
}

export default App;
