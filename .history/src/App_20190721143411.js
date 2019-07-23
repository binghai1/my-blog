import React from 'react';
import './App.css';
import {withRouter} from 'react-router-dom'
function App(props) {
  return (
    <div className="App">
        {console.log(props)}
    </div>
  );
}

export default withRouter(App);
