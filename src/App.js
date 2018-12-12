import React, { Component } from 'react';
import HelloWorld from './HelloWorld';
import reducer from './reducers'; // create the reducer function elsewhere

import { createStore } from 'redux'; // import createStore function

const initialState = { tech: 'React ' }; //establish the initial state
const store = createStore(reducer, initialState); // pass the reducer and initial state into the store to be created

class App extends Component {
  // state = {
  //   tech: 'React'
  // };

  render() {
    return <HelloWorld tech={store.getState().tech} />;
  }
}

export default App;
