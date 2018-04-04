import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import NavBar from './NavBar';
import Footer from './Footer';


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={NavBar}/>
          <Route exact path='/footer' component={Footer}/>
        </Switch>
      </Router>

    );
  }
}

export default App;
