import React, { Component } from 'react';
import Title from './Title';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: 'Creo que si funciono'
    }
  }

  render() {
    return (
      <Title title="My first react app"/>
    );
  }
}

export default App;
