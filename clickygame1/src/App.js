import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import cards from './cards.json';

class App extends Component {
  //this.state.cards set to access json array
  state = {
    cards : cards,
    score : 0,
    highscore : 0
  };


  render() {
    return (
        <Wrapper>

        <Header />

        <Card />

        </Wrapper>
    );
  }
}

export default App;
