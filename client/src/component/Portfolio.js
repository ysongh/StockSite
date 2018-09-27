import React, { Component } from 'react';
import axios from 'axios';

class Portfolio extends Component{
    constructor(){
        super();
        this.state = {
            stocks: [],
            symbol: '',
            price: '',
            name: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    componentDidMount (){
        console.log(this.props);
        axios.get('https://api.iextrading.com/1.0/stock/aapl/company')
            .then(response => {
                this.setState({symbol: response.data});
             })
             .catch(error => {
                 console.log(error);
             });
    }
     
    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    
    onSubmit(e){
        e.preventDefault();
        
        axios.get(`https://api.iextrading.com/1.0/stock/${this.state.name}/company`)
            .then(response => {
                this.setState({symbol: response.data});
             })
             .catch(error => {
                 console.log(error);
             });
             
        axios.get(`https://api.iextrading.com/1.0/stock/${this.state.name}/price`)
            .then(response => {
                this.setState({price: response.data});
             })
             .catch(error => {
                 console.log(error);
             });
    }
     
    render(){
        
        return(
            <div>
                <h1>Portfolio</h1>
                <form onSubmit={this.onSubmit}>
                    <input
                      type="text"
                      placeholder="Stock Name"
                      name="name"
                      onChange={this.onChange}
                    />
                    <input type="submit" />
                </form>
                <p>{this.state.symbol.symbol}</p>
                <p>{this.state.symbol.companyName}</p>
                <p>${this.state.price}</p>
            </div>
        );
    }
}

export default Portfolio;