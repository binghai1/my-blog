import React from 'react';
import './App.css';
import {withRouter} from 'react-router-dom'
function App(props) {
  return (
    <div className="App">
        {props.children}
    </div>
  );
}

export default App;
