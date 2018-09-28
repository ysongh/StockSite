import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Home extends Component{
  render(){
      return(
          <div className="text-center">
              <h1>Stock Site</h1>
              <Link to="/login" className="btn btn-light">
                  Login
              </Link>
              <Link to="/register" className="btn btn-light">
                  Sign Up
              </Link>
          </div>
      );
  }
}

export default Home;