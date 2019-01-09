import React, { Component } from 'react';
import Card from './Card'

class CardList extends Component {
  state = {
    isInBlack: true,
    isInWhite: false,
    cards: [
      {
        text: 'Some text A',
        type: 'white',
      },
      {
        text: 'Some text B _____ more text more text more text',
        type: 'white',
      },
      {
        text: 'Some text C _____ more text more text _____ more text more text',
        type: 'black',
      },
    ]
  }

  componentDidMount() {
    this.setState({
      isLoading: false,
    })
  }

  showBlack = () => {
    this.setState({
      isInBlack: true,
      isInWhite: false,
    })
  }

  showWhite = () => {
    this.setState({
      isInBlack: false,
      isInWhite: true,
    })
  }

  displayButtons = () => {
    if (this.state.isInBlack) {
      return <div className="card-list-opt">
        <div onClick={this.showBlack} className="selected-option list-option">Black</div>
        <div onClick={this.showWhite} className="list-option">White</div>
      </div>
    } else if (this.state.isInWhite) {
      return <div className="card-list-opt">
      <div onClick={this.showBlack} className="list-option">Black</div>
      <div onClick={this.showWhite} className="selected-option list-option">White</div>
    </div>
    }
  }


  displayBlackOrWhite = () => {
    if (this.state.isInBlack) {
      return (
        this.state.cards.map((card, index) => {
          if (card.type === 'black') {
            return <div key={index} className="guide-card-container">
              <Card info={card} index={index} class="black-card" />
            </div>
          }
        })
      )
    } else if (this.state.isInWhite) {
      return (
        this.state.cards.map((card, index) => {
          if (card.type === 'white') {
            return <div key={index} className="guide-card-container">
              <Card info={card} index={index} class="white-card" />
            </div>
          }
        })
      )
    }
  }

  render() {
    return (
      <section>
        {this.displayButtons()}
        <div className="card-cuadricle">
          {this.displayBlackOrWhite()}
        </div>
      </section>
    );
  }
}

export default CardList;