import React, { Component } from 'react';
import NavBar from './NavBar';


class Jobs extends Component {
  render() {
    return (
      <div>
          <NavBar />
          <div>
            <p>Jobs tab</p>
            <br />
            <br />
            <h4> Jobs tab, breaks are being used to have the text show here instead of hidding under the header-navbar </h4>
            <h4> For now the tabs about us and venture cafe reffers to the jobs tab as well </h4>
          </div>
      </div>
    )
  }
}


export default Jobs;
