import React, { Component } from 'react';

import './App.css';
import Header from "../Header";
import { Container } from "reactstrap";

class App extends Component {
  render() {
    return (
      <div id="app">
        <Header />
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}

export default App;
