import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar sans-serif">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="#">
              Sapling
            </a>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav" />
            <ul className="nav navbar-nav navbar-right nav-style">
              <li>
                <a className="nav-link" href="#">
                  My Logs
                </a>
              </li>
              <li>
                <a className="nav-link" href="#">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
