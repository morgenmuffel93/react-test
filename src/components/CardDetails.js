import React, { Component } from 'react';
import Card from './Card'

class CardDetails extends Component {

  backToList = (e) => {
    e.preventDefault()
    this.props.handleBackButton()
  }

  render() {
    return (
      <div className="card-details-container">
        <div className="card-details-left">
        <div onClick={this.backToList}>
        <img src={require('../images/back.svg')} className="back-img"/>
        </div>
          <Card info={this.props.cardInfo} class={`${this.props.cardInfo.type}-card`} isInDetails='true'/>
        </div>
        <div className="card-details-right">
          {this.props.cardList.map((card, index) => {
            return <div key={index} className="card-details-white-opt">
              <div>{card.text}</div>
            </div>
          })
          }
        </div>
      </div>
    );
  }
}

export default CardDetails;