import React, { Component } from 'react';
import './App.css';

import Home from './component/home/Home';
import Register from './component/auth/Register';
import Portfolio from './component/Portfolio';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Home />
          <Portfolio />
          <Register/>
        </div>
      </div>
    );
  }
}

export default App;
