 import React from 'react';
 import { connect } from 'react-redux';
 import { AddToInput, ClearInput, Add, Minus, Multiplication, Division, Equal } from '../actions/action'; 
 import './App.css';
 import Button from './Button';
 import ClearButton from './ClearButton' ;


 const mapStateToProps = function ({calculator}){
   return {
       input: calculator.input
   }
 }

 const mapDispatchToProps = dispatch => {
  return {
    addToInput: (val) => dispatch(AddToInput(val)),
    clearInput: () => dispatch(ClearInput()),
    addition: () => dispatch(Add()),
    minus: () => dispatch(Minus()),
    multiplication: () => dispatch(Multiplication()),
    division: () => dispatch(Division()),
    equal: () => dispatch(Equal()),
  }
}

 let  App = (props) => {
  const addZeroInput = (val) => {
     if(props.input) {
      props.addToInput(val)
    }
  }

  const addDemical = (val) => {
    if(props.input.indexOf('.') === -1){
      props.addToInput(val)
    }
  }
  const addFromKeyBoard = (e) => {
     props.addToInput(e.target.value)
  }

   return (
     <div className="app">
       <div className="block-component">
       <div className="row">
       <input  typy="number" className="input" value={props.input} onChange={addFromKeyBoard}/>
       </div>
         <div className='row'>
           <Button handleClick={props.addToInput}>7</Button>
           <Button handleClick={props.addToInput}>8</Button>
           <Button handleClick={props.addToInput}>9</Button>
           <Button handleClick={props.division}>/</Button>
         </div>
         <div className='row'>
           <Button handleClick={props.addToInput}>4</Button>
           <Button handleClick={props.addToInput}>5</Button>
           <Button handleClick={props.addToInput}>6</Button>
           <Button handleClick={props.multiplication}>*</Button>
         </div>
         <div className='row'>
           <Button handleClick={props.addToInput}>1</Button>
           <Button handleClick={props.addToInput}>2</Button>
           <Button handleClick={props.addToInput}>3</Button>
           <Button handleClick={props.addition}>+</Button>
         </div>
         <div className='row'>
           <Button handleClick={addDemical}>.</Button>
           <Button handleClick={addZeroInput}>0</Button>
           <Button handleClick={props.equal}>=</Button>
           <Button handleClick={props.minus}>-</Button>
         </div>
         <div className="row">
           <ClearButton handleClick={props.clearInput}>Clear</ClearButton>
         </div>
      
       </div>
     </div>
   );
 };
 export default connect(
   mapStateToProps,
   mapDispatchToProps
 )(App);