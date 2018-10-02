import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import { Provider } from 'react-redux';
import jwt_decode from 'jwt-decode';

import setAuthToken from './utilis/setAuthToken';
import PrivateRoute from './component/common/PrivateRoute';
import { setCurrentUser, logoutUser } from './actions/authActions';

import store from './store';

import Navbar from './component/layout/Navbar';
import Footer from './component/layout/Footer';
import Home from './component/home/Home';
import Register from './component/auth/Register';
import Login from './component/auth/Login';
import Portfolio from './component/portfolio/Portfolio';
import Transactions from './component/transactions/Transactions';

if(localStorage.jwtToken){
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));
  
  const currentTime = Date.now() / 1000;
  
  if(decoded.exp < currentTime){
    store.dispatch(logoutUser());
    window.location.href = '/login';
  }
}



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Route exact path="/" component={Home} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Switch>
                 <PrivateRoute exact path="/portfolio" component={Portfolio} />
                 <PrivateRoute exact path="/transactions" component={Transactions} />
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
