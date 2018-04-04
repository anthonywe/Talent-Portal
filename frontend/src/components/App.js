import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ActiveNavBar from './ActiveNavBar';
import Companies from './Companies';
import Home from './Home';
import Jobs from './Jobs';

import NavBar from './NavBar';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>

          <Route exact path='/' component={Home}/>
          <Route path='/Companies' component={Companies}/>
          <Route path='/Jobs' component={Jobs}/>
          <Route exact path='/footer' component={Footer}/>

        </Switch>
      </Router>

    );
  }
}

export default App;
