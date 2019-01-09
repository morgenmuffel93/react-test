import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import CardList from './components/CardList'
import './styles/style.css';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Navbar />
          <Intro/>
          <CardList/>
        </div>
      </Provider>
    );
  }
}
