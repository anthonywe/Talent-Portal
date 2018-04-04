import React, { Component } from 'react';
import NavBar from './NavBar';


class Home extends Component {
  render() {
    return (
      <div>
          <NavBar />
          <div>
            <p>Home tab</p>
            <br />
            <br />
            <h1> Home tab, breaks are being used to have the text show here instead of hidding under the header-navbar </h1>
          </div>
      </div>
    )
  }
}


export default Home;
