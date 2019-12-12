import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import cards from './cards.json';

//create gamme logic that if score = 12 user wins and game resets

class App extends Component {
  //this.state.cards set to access json array
  state = {
    cards : cards,
    score : 0,
    highscore : 0
  };

  //Reset Game, function is triggered when same card is click more than once
  resetGame = () =>{
    //check to see if score is greater than highscore
    if (this.state.score > this.state.highscore) {
      //if score is greater, set highscore equal to score
      this.setState({highscore: this.state.score}, function() {
        //console.log highscore
        console.log(this.state.highscore);
      });
    }

    //set card click count back to zero for all cards
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    //alert user game over
    alert("Game Over")
  }



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
