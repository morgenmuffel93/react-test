import React, { Component } from 'react';

class Intro extends Component {
  render() {
    return (
      <section className="intro-section">
        <div className="intro-left">
          <div className="intro-text title">Cards against humanity</div>
          <div className="intro-text">A party game for horrible people</div>
        </div>
        <div className="intro-right">
          <img src={require('../images/cards-intro.jpg')} className="intro-img" alt="" />
        </div>
      </section>
    );
  }
}

export default Intro;