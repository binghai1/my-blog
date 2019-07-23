import React from 'react';
import './App.css';
import {withRouter} from 'react-router-dom'
function App() {
  return (
    <div className="App">
        {this.props}
    </div>
  );
}

export default withRouter(App);
