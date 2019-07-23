import React from 'react';
import './App.css';
import {withR} from 'react-router-dom'
function App() {
  return (
    <div className="App">
        {this.props.children}
    </div>
  );
}

export default App;
