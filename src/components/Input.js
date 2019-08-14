import React from 'react';
import { connect } from 'react-redux';
import './Input.css';


let Input = (props) => {
  return (
    <input  typy="number" className="input" value={props.value}/>
  );
};

export default connect()(Input);