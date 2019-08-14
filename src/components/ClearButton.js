import React from 'react';
import { connect } from 'react-redux';
import store from '../store';
import './Button.css';

let ClearButton = (props) => {
  return (
    <button 
    className="button clear"
    onClick={()=>{props.handleClick(props.children)}}>
        {props.children}
    </button>
  );
};

export default connect(
)(ClearButton);