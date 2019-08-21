 import React from 'react';
 import { connect } from 'react-redux';
 import { bindActionCreators } from 'redux';
 import { AddToInput, ClearInput, Add, Minus, Multiplication, Division, Equal } from '../actions/action'; 
 import './App.css';
 import Button from './Button';

 const mapStateToProps = function ({calculator}){
   return {
       input: calculator.input
   }
 }

 const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    ...bindActionCreators({ AddToInput, ClearInput, Add, Minus, Multiplication, Division, Equal }, dispatch)
  }
}

 let  App = (props) => {
  const addDemical = (val) => {
    if(props.input.indexOf('.') === -1){
      props.AddToInput(val)
    }
  }
  const addFromKeyBoard = (e) => {
     props.AddToInput(e.target.value)
  }
  const addZeroInput = (val) => {
    if(props.input) {
     props.AddToInput(val)
   }
 }
  const buttons = [
    {
      item: 7,
      handler: props.AddToInput
    }, 
    {
      item: 8,
      handler: props.AddToInput
    },
    {
      item: 9,
      handler: props.AddToInput
    },
    {
      item: '/',
      handler: props.Division
    },
    {
      item: 4,
      handler: props.AddToInput
    },
    {
      item: 5,
      handler: props.AddToInput
    },
    {
      item: 6,
      handler: props.AddToInput
    },
    {
      item: '*',
      handler: props.Multiplication
    },
    {
      item: 1,
      handler: props.AddToInput
    },
    {
      item: 2,
      handler: props.AddToInput
    },
    {
      item: 3,
      handler: props.AddToInput
    },
    {
      item: '+',
      handler: props.Add
    },
    {
      item: '.',
      handler: addDemical
    },
    {
      item: 0,
      handler: addZeroInput
    },
    {
      item: '=',
      handler: props.Equal
    },
    {
      item: '-',
      handler: props.Minus
    }]

   return (
     <div className="app">
       <div className="block-component">
       <div className="row">
       <input  typy="number" className="input" value={props.input} onChange={addFromKeyBoard}/>
       </div>
         <div className='row'>
            {buttons.map(
            (button, index) => 
              <Button key={index} handleClick={button.handler}>{button.item}</Button>
            )} 
         </div>
         <div className="row">
         <button 
          className="button clear"
          onClick={()=> {props.ClearInput()}}>
              Clear
          </button>
         </div>
      
       </div>
     </div>
   );
 };
 export default connect(
   mapStateToProps,
   mapDispatchToProps
 )(App);