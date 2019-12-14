import React, { Component } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import cards from "./cards.json";
import swal from 'sweetalert';

class App extends Component {
  //this.state.cards set to access json array
  state = {
    cards: cards,
    score: 0,
    highscore: 0
  };

  //Reset Game, function is triggered when same card is click more than once
  resetGame = () => {
    //check to see if score is greater than highscore
    if (this.state.score > this.state.highscore) {
      //if score is greater, set highscore equal to score
      this.setState({ highscore: this.state.score }, function() {
        //console.log highscore
        console.log("Highscore: ");
        console.log(this.state.highscore);
      });
    }

    //set card click count back to zero for all cards
    this.state.cards.map(card => {
      card.count = 0;
      return true;
    });

    //check to see if user reached score of 12, if so alert win
    if (this.state.score > 11) {
      // swal(`You Win! Great Job! \nSCORE: ${this.state.score}/12`, "","success");
      swal('You Win!', `Score: ${this.state.score}/12`, 'success', {
        button: "Start Over",
      })
      //reset score to zero
      this.setState({ score: 0 });
      return true;
    } else {
      //alert user game over
      swal('Game Over!', `\nSCORE: ${this.state.score}/12`, "warning", {
        button: "Start Over",
      });
      //reset score to zero
      this.setState({ score: 0 });
      return true;
    }
  };

  //method to check if card has been previously clicked
  clickCount = id => {
    //pass in object and index for access
    this.state.cards.find((obj, index) => {
      if (obj.id === id) {
        //if the card click count is equal to zero...
        if (cards[index].count === 0) {
          //increase the card click count by one
          cards[index].count = cards[index].count + 1;

          //increase the score by one
          this.setState({ score: this.state.score + 1 }, function() {
            //console log updated score value
            console.log(this.state.score);

            if (this.state.score > 11) {
              // swal(`You Win! Great Job! \nSCORE: ${this.state.score}/12`, "","success");
              swal('You Win!', `Score: ${this.state.score}/12`, 'success', {
                button: "Start Over",
              })
              //reset score to zero
              this.setState({ score: 0 });
              return true;
            }

          });

          

          //randomize locations for each card
          this.state.cards.sort(() => Math.random() - 0.5);
          return true;
        }

        //otherwise if click count is not equal to zero(already clicked), reset game
        else {
          this.resetGame();
        }
      }
      //eslint-disable-next-line
      return;
    });
  };

  render() {
    //render components and pass properties
    return (
      <Wrapper>
        {/* Passing properties score and highscore into the Header Component*/}
        <Header score={this.state.score} highscore={this.state.highscore}>
          TEEN TITANS GO! TO THE CLICKY GAME
        </Header>
        {/* Loop/map through cards json, create 'card' for each, with properties, clickcount, id, key, and image */}
        {this.state.cards.map(card => (
          <Card
            //Pass clickCount property
            clickCount={this.clickCount}
            // id and image already defined in the json object, attaching key property to not trigger error in React
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
