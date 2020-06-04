import React from 'react';
import logo from './logo.svg';
import './App.css';

import CapturePatternBuilder from './editor/CapturePatternBuilder';
import FieldDefBuilder from './editor/FieldDefBuilder';
import ExpressionBuilder from './editor/ExpressionBuilder';
// function handleValidSubmit(values) {
//   console.log("_handleValidSubmit ", values);

// }

// function handleInvalidSubmit(values) {
//   console.log("_handleInvalidSubmit ", values);

// }

// function addNewRule(){
//   console.log("_addNewRule ");
// }

// function removeRule(){
//   console.log("_removeRule ",);
// }

function App() {
  return (
    <div className="App">
      <FieldDefBuilder></FieldDefBuilder>
    </div>
  );
}

export default App;
