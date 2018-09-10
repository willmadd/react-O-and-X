import React from "react";
import "./Board.css";

import Square from "./Square.jsx";

class Board extends React.Component {



  render() {

    return (
      <div className="board">

        {this.props.boardSize.map ((sq, index) => {
            return <Square key={index} onClick ={this.props.onClick} index = {index} square = {sq}/>
        })}
  
      </div>
    );
  }
}

export default Board;
