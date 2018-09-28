import React, { Component } from 'react';
import axios from 'axios';

class Portfolio extends Component{
    constructor(){
        super();
        this.state = {
            stocks: [],
            symbol: '',
            price: '',
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
        
        axios.get(`https://api.iextrading.com/1.0/stock/${this.state.name}/company`)
            .then(response => {
                this.setState({symbol: response.data});
                this.setState({error: ""});
                this.setState({show: true});
                
                axios.get(`https://api.iextrading.com/1.0/stock/${this.state.name}/price`)
                    .then(response => {
                        this.setState({price: response.data});
                     });
             })
             .catch(error => {
                 this.setState({error: "Not found"});
                 this.setState({show: false});
             });
    }
     
    render(){
        let stockInfo;
        
        stockInfo = (
            <div className="border border-primary mt-3">
                <p>{this.state.symbol.symbol} - {this.state.symbol.companyName} - ${this.state.price}</p>
            </div>
        );
        
        return(
            <div className="Portfolio">
                <h1 className="text-center">Portfolio</h1>
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

export default Portfolio;