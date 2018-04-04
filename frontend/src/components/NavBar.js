import React, { Component } from 'react';
import '../styles/NavBar.css';
import { NavLink } from 'react-router-dom'



class NavBar extends Component {

  render() {
    return (
      <div >
      <header className="navbar fixed-top navbar-expand-lg navbar-light justify-content-between">
      <a className="navbar-brand" href="/">
        <img className="logo" src="logoV.png"></img>
      </a>
      <div className="navbar-nav-scroll float-lg-right">
          <ul className="navbar-nav bd-navbar-nav flex-row">
            <li>
              <NavLink Exact activeClassName='active' to='/'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName='active' to='/companies'>
                Companies
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName='active' to='/jobs'>
                Jobs
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName='active' to='/jobs'>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName='active' to='/jobs'>
                Venture Cafe
              </NavLink>
            </li>

          </ul>
        </div>
        </header>
      </div>
    )
  }
}

export default NavBar;
