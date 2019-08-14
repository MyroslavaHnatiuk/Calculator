 import React from 'react';
 import { connect } from 'react-redux';
 import store from '../store';
 import { AddToInput, ClearInput, Add, Minus, Multiplication, Division, Equal } from '../actions/action'; 
 import './App.css';
 import Input from './Input';
 import Button from './Button';
 import ClearButton from './ClearButton' ;


 const mapStateToProps = function ({calculator}){
   return {
       input: calculator.input
   }
 }
 const addToInput = (val) => {
   store.dispatch(AddToInput(val))
 }
 const clearInput = () => {
   store.dispatch(ClearInput())
 }
 const addition = () => {
   store.dispatch(Add())
 }
 const minus = () => {
   store.dispatch(Minus())
 }
 const multiplication = () => {
   store.dispatch(Multiplication())
 }
 const division = () => {
   store.dispatch(Division())
 }
 const equal = (val) => {
   store.dispatch(Equal(val))
 }

 let  App = (props) => {
  const addZeroInput = (val) => {
     if(props.input) {
      store.dispatch(AddToInput(val))
    }
  }

  
   return (
     <div className="app">
       <div className="block-component">
       <div className="row">
       <input  typy="number" className="input" value={props.input}/>
       </div>
         <div className='row'>
           <Button handleClick={addToInput}>7</Button>
           <Button handleClick={addToInput}>8</Button>
           <Button handleClick={addToInput}>9</Button>
           <Button handleClick={division}>/</Button>
         </div>
         <div className='row'>
           <Button handleClick={addToInput}>4</Button>
           <Button handleClick={addToInput}>5</Button>
           <Button handleClick={addToInput}>6</Button>
           <Button handleClick={multiplication}>*</Button>
         </div>
         <div className='row'>
           <Button handleClick={addToInput}>1</Button>
           <Button handleClick={addToInput}>2</Button>
           <Button handleClick={addToInput}>3</Button>
           <Button handleClick={addition}>+</Button>
         </div>
         <div className='row'>
           <Button>.</Button>
           <Button handleClick={addZeroInput}>0</Button>
           <Button handleClick={equal}>=</Button>
           <Button handleClick={minus}>-</Button>
         </div>
         <div className="row">
           <ClearButton handleClick={clearInput}>Clear</ClearButton>
         </div>
      
       </div>
     </div>
   );
 };
 export default connect(
   mapStateToProps
 )(App);