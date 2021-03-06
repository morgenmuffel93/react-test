import React, { Component } from 'react';
import Card from './Card'
import CardDetails from './CardDetails'

class CardList extends Component {
  state = {
    isInBlack: true,
    isInWhite: false,
    addingNewCard: false,
    showingCardDetails: false,
    detailedCardIndex: null,
    newCardText: '',
    error: '',
    cards: [
      {
        text: 'Dying',
        type: 'white',
      },
      {
        text: 'Justin Bieber',
        type: 'white',
      },
      {
        text: 'Justin Bieber2',
        type: 'white',
      },
      {
        text: 'Justin Bieber3',
        type: 'white',
      },
      {
        text: 'This shouldnt show',
        type: 'white',
      },
      {
        text: 'During my time at Ironhack, I have felt like ______.',
        type: 'black',
      },
    ]
  }

  showBlack = () => {
    this.setState({
      isInBlack: true,
      isInWhite: false,
      addingNewCard: false,
    })
  }

  showWhite = () => {
    this.setState({
      isInBlack: false,
      isInWhite: true,
      addingNewCard: false,
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

  editCard = (data) => {
    let index = data.cardIndex
    this.state.cards[index].text = data.cardText;
    this.forceUpdate()
  }

  displayBlackOrWhite = () => {
    if (this.state.isInBlack) {
      return (
        this.state.cards.map((card, index) => {
          if (card.type === 'black') {
            return <div key={index} className="guide-card-container">
              <Card info={card} index={index} class="black-card" onSubmit={this.editCard} onDetails={this.showDetails} />
            </div>
          }
        })
      )
    } else if (this.state.isInWhite) {
      return (
        this.state.cards.map((card, index) => {
          if (card.type === 'white') {
            return <div key={index} className="guide-card-container">
              <Card info={card} index={index} class="white-card" onSubmit={this.editCard} onDetails={this.showDetails} />
            </div>
          }
        })
      )
    }
  }

  showForm = () => {
    this.setState({
      addingNewCard: true,
    })
  }

  newCardText = (e) => {
    this.setState({
      newCardText: e.target.value
    })
  }

  checkIfAdding = () => {
    if (this.state.addingNewCard && this.state.isInBlack) {
      return <div className="guide-card-container">
        <form className="black-card add-card">
          <textarea name="text" cols="20" rows="13" className="add-black-text" onChange={this.newCardText} />
          <button type="black" className="add-card-btn" onClick={this.addNewCard}>Add</button>
          <button className="add-card-btn" onClick={this.discardNewCard}>Discard</button>
        </form>
      </div>
    } else if (this.state.addingNewCard && this.state.isInWhite) {
      return <div className="guide-card-container">
        <form className="white-card add-card">
          <textarea name="text" cols="20" rows="13" className="add-white-text" onChange={this.newCardText} />
          <button type="white" className="add-card-btn" onClick={this.addNewCard}>Add</button>
          <button className="add-card-btn" onClick={this.discardNewCard}>Discard</button>
          <div>{this.state.error}</div>
        </form>
      </div>
    } else {
      return <div className="add-img-container">
        <img src={require('../images/add-card.svg')} className="add-card-img" alt="Add new card" onClick={this.showForm} />
      </div>
    }
  }

  addNewCard = (e) => {
    e.preventDefault()

    if (this.state.newCardText.indexOf('_') >= 0) {

      if (e.target.attributes.type.value === 'white') {
        this.setState({
          error: 'White cards cannot have blanks.'
        })

      } else {

        let replaced = this.state.newCardText.replace(/_+/, '______')
        this.state.cards.push({
          text: replaced,
          type: e.target.attributes.type.value,
        })
        this.setState({
          addingNewCard: false,
          error: '',
        })
      }
    } else {
      this.state.cards.push({
        text: this.state.newCardText,
        type: e.target.attributes.type.value,
      })
      this.setState({
        addingNewCard: false,
        error: '',
      })
    }
  }

  discardNewCard = (e) => {
    e.preventDefault()
    this.setState({
      newCardText: '',
      addingNewCard: false,
      error: '',
    })
  }

  showDetails = (index) => {
    this.setState({
      showingCardDetails: true,
      detailedCardIndex: index,
    })
  }

  retrieveCardInfo = () => {
    let selected = this.state.cards.slice(0, 4);
    console.log(this.state.detailedCardIndex)
    return (
      <div>
        <CardDetails cardInfo={this.state.cards[this.state.detailedCardIndex]} cardList={selected} handleBackButton={this.showList}/>
      </div>
    )
  }

  showList = () => {
    this.setState({
      showingCardDetails: false,
      detailedCardIndex: null,
    })
  }

  render() {
    if (this.state.showingCardDetails && this.state.detailedCardIndex) {
      console.log(this.state.detailedCardIndex)
      return this.retrieveCardInfo()
    } else {
      return (
        <section>
          {this.displayButtons()}
          <div className="card-cuadricle">
            {this.displayBlackOrWhite()}
            {this.checkIfAdding()}
          </div>
        </section>
      )
    }
  }
}

export default CardList;