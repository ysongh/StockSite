import React, { Component } from 'react';
import './App.css';

import Portfolio from './component/Portfolio';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Portfolio />
        </div>
      </div>
    );
  }
}

export default App;
