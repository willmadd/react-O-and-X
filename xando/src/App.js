import React from "react";
import "./App.css";
import Header from "./components/Header";
import Board from "./components/Board";
import Scoretext from "./components/Scoretext";
import Scoretally from "./components/Scoretally";

class App extends React.Component {
  state = {
    value: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    size: 3,
    xGo: true,
    textPrompt: "Welcome to X and O"
  };

  render() {
    return (
      <div className="main">
        <Header />
        <Board
          size={this.state.size}
          onClick={this.updateScoreArray}
          boardSize={this.state.value}
        />
        <Scoretext text={this.state.textPrompt} />
        <Scoretally text={this.state.textPrompt} />
      </div>
    );
  }

  updateScoreArray = clickedId => {
    let newArr = Array.from(this.state.value);
    let scoreMarker = 0;
    let textPromptText ="";
    if (this.state.xGo === true) {
      scoreMarker = 1;
      textPromptText = "O to Go";
    } else {
      scoreMarker = 10;
      textPromptText = "X to Go";
    }

    const wins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    newArr[clickedId] = scoreMarker;
    
    wins.forEach(go => {
      let goScore = newArr[go[0]] + newArr[go[1]] + newArr[go[2]];
      if (goScore === 3) {
        textPromptText = "X Wins";
        alert('X Wins');
      }
      if (goScore === 30) {
        textPromptText = "O Wins";
        alert('O Wins');
      }
    });

    this.setState({
      value: newArr,
      xGo: !this.state.xGo,
      textPrompt: textPromptText
    });
  };
}

export default App;
