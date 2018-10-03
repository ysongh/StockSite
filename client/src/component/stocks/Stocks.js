import React, { Component } from 'react';
import { connect } from 'react-redux';

import StocksList from './StocksList';
import { getStocks } from '../../actions/stockActions';

class Stocks extends Component{
    componentDidMount(){
         this.props.getStocks();
    }
    
    render(){
        const {stocks, loading} = this.props.stocks;
        let stockContent;
        
        if(stocks === null || loading){
            stockContent = <p>loading</p>;
        }
        else{
            stockContent = <StocksList stocks={stocks} />;
        }
        
        return(
            <div>
                <h1>Your Stocks</h1>
                {stockContent}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    stocks: state.stocks,
    auth: state.auth
});

export default connect(mapStateToProps, {getStocks})(Stocks);