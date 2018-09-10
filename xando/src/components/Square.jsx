import React from 'react'
import "./Board.css";


class Square extends React.Component {
  render() {


    return(
        <button key={this.props.index} className="square" onClick= {()=>{this.props.onClick(this.props.index)}}>{(this.props.square===1)?<i class="fas fa-times"></i>:(this.props.square === 10)? <i class="far fa-circle"></i>:""}</button>
    );
    
  }


}

export default Square;
