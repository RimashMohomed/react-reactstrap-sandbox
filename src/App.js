import React from 'react';
import logo from './logo.svg';
import './App.css';

import CapturePatternBuilder from './editor/CapturePatternBuilder';
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
      <CapturePatternBuilder></CapturePatternBuilder>
    </div>
  );
}

export default App;
