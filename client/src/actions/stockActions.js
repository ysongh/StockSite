import axios from '../axios-stocks';

import { GET_STOCKS, STOCK_LOADING } from './types';

export const getTransactions = () => dispatch => {
    dispatch(setTransactionLoading());
    axios.get('/api/stocks/all')
        .then(res =>
            dispatch({
                type: GET_STOCKS,
                payload: res.data
            })
        )
        .catch(err => 
            dispatch({
                type: GET_STOCKS,
                payload: {}
            })
        );
};

export const setTransactionLoading = () => {
    return{
        type: STOCK_LOADING
    };
};