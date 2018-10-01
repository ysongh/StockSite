import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import stockImage from '../../img/stocks.png';

class Home extends Component{
  render(){
      const {isAuthenticated} = this.props.auth;
      
      const authLinks = (
        <div>
          <Link to="/portfolio" className="btn btn-light">
              Portfolio
          </Link>
        </div>
      );
      
      const guestLinks = (
        <div>
          <Link to="/login" className="btn btn-light">
              Login
          </Link>
          <Link to="/register" className="btn btn-light">
              Sign Up
          </Link>
        </div>
      );
      
      return(
          <div className="text-center">
              <h1>Stock Site</h1>
              <img className="img-fluid" style={{width: '500px', height: '350px'}} src={stockImage} alt="Stocks" />
              {isAuthenticated ? authLinks : guestLinks}
          </div>
      );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Home);