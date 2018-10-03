import React, { Component } from 'react';
import { connect } from 'react-redux';

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
        
        return(
            <div>
                <h1>Your Stocks</h1>
                <div className="row">
                    <div className="col">
                        
                    </div>
                    {stockContent}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    stocks: state.stocks,
    auth: state.auth
});

export default connect(mapStateToProps, {getStocks})(Stocks);