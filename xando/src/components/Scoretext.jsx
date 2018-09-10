import React from 'react';
import './Scoretext.css'

function Scoretext(props){
    console.log(props.text);
return(
    <div className="score">{props.text}</div>
)
}

export default Scoretext