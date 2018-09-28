import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './component/home/Home';
import Register from './component/auth/Register';
import Portfolio from './component/Portfolio';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/portfolio" component={Portfolio} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
