import React, { Component } from 'react';
import request from 'request-promise';
import { connect } from 'react-redux';
import { withRouter   } from 'react-router-dom';

import { logoutUser } from '../../actions/authActions';

class Portfolio extends Component{
    constructor(){
        super();
        this.state = {
            stocks: [],
            name: '',
            error: '',
            show: false
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
     
    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    
    onSubmit(e){
        e.preventDefault();
        
        var options = {
            uri: `https://api.iextrading.com/1.0/tops?symbols=`+this.state.name,
            json: true
        };
        
        request(options)
            .then((response) => {
                this.setState({show: true});
                this.setState({error: ""});
                this.setState({stocks: response});
            })
            .catch((err) => {
                console.log(err);
                this.setState({error: "Not found"});
                this.setState({show: false});
            });
    }
    
    buyStock(symbol, price, quantity){
        const stockData = {
            symbol: symbol,
            price: price,
            quantity: quantity
        };
        console.log(stockData);
    }
     
    render(){
        const {user} = this.props.auth;
        let stockInfo;
        
        stockInfo = (
            <div className="border border-primary mt-3">
                {
                    this.state.stocks.map((stock, index) => {
                      return (
                        <div key={index}>
                            <p>Symbol: {stock.symbol}</p>
                            <p>Price: ${stock.lastSalePrice}</p>
                            <p>Volume: {stock.volume}</p>
                            <button
                                onClick={() => this.buyStock(stock.symbol, stock.lastSalePrice, 1)}>
                                Buy
                            </button>
                        </div>
                      );
                    })
                }
                
            </div>
        );
        
        return(
            <div className="Portfolio">
                <h1 className="text-center">Portfolio</h1>
                <p className="text-center">You have ${user.money}</p>
                <form onSubmit={this.onSubmit}>
                    <input
                      type="text"
                      placeholder="Stock Name"
                      name="name"
                      onChange={this.onChange}
                    />
                    <input type="submit" />
                </form>
                {this.state.show ? stockInfo : null}
                <p>{this.state.error}</p>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default withRouter(connect(mapStateToProps, {logoutUser})(Portfolio));