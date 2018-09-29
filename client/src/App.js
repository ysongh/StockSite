import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';

import Home from './component/home/Home';
import Register from './component/auth/Register';
import Login from './component/auth/Login';
import Portfolio from './component/Portfolio';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <div className="container">
              <Route exact path="/" component={Home} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/portfolio" component={Portfolio} />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
