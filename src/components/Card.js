import React, { Component } from 'react';

class Card extends Component {

  render() {
      return (
        <div className={this.props.class}>
          <div>{this.props.info.text}</div>
        </div>
      );
    }
  }

export default Card;