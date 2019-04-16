import React, { Component } from 'react';
import './App.css';
import FriendList from './components/FriendList';
import {Header, Container} from './StyledComponents';

class App extends Component {
  render() {

    return (
      <Container>
        <Header>Keep Track of Your Friend's App</Header>
        <FriendList />
      </Container>
    );
  }
}

export default App;