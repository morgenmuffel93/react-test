import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-logo">
            <img src={require('../images/cah-logo.png')} alt="main" className="logo-img" />
            <div>Cards against humanity</div>
          </div>
          <div className="nav-links">
            <div>Create your own</div>
            <div>Surprise me</div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;