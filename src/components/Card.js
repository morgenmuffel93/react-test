import React, { Component } from 'react';

class Card extends Component {
  state = {
    isBeingEdited: false,
    editedText: this.props.info.text,
  }

  changeToEdit = (e) => {
    e.preventDefault()
    this.setState({
      isBeingEdited: true,
    })
  }

  handleChange = (e) => {
    e.preventDefault();

    this.setState({
      editedText: e.target.value,
    })
  }

  handleEdit = (e) => {
    e.preventDefault()
    let cardIndex = e.target.attributes.index.value;
    let cardType = e.target.attributes.type.value;
    let cardText = this.state.editedText;

    let data = { cardIndex, cardType, cardText }

    this.props.onSubmit(data)
    this.setState({
      isBeingEdited: false,
    })
  }

  checkIfInEditView = () => {
    if (this.state.isBeingEdited) {
      return (
        <form className="edit-card">
          <textarea name="editedText" cols="20" rows="13" className={`add-${this.props.info.type}-text`} value={this.state.editedText} onChange={this.handleChange} />
          <button className="add-card-btn" onClick={this.handleEdit} index={this.props.index} type={this.props.info.type}>Save</button>
          <button className="add-card-btn" onClick={this.discardEditCard}>Discard</button>
        </form>)
    } else if (this.props.info.type === 'black' && !this.props.isInDetails) {
      console.log(this.props.isInDetails)
      return <div className="card-info">
        <div className={`${this.props.class}-edit-icon`} onClick={this.changeToEdit}></div>
        <div className="card-text">{this.props.info.text}</div>
        <div className="more-btn" index={this.props.index} onClick={this.handleViewDetails}>More...</div>
      </div>
    } else {
      return <div className="card-info">
        <div className={`${this.props.class}-edit-icon`} onClick={this.changeToEdit}></div>
        <div>{this.props.info.text}</div>
      </div>
    }
  }

  handleViewDetails = (e) => {
    e.preventDefault()
    let cardIndex = e.target.attributes.index.value;
    this.props.onDetails(cardIndex)
  }

  discardEditCard = (e) => {
    e.preventDefault()
    this.setState({
      isBeingEdited: false,
    })
  }

  render() {
    return (
      <div className={this.props.class}>
        {this.checkIfInEditView()}
      </div>
    );
  }
}

export default Card;