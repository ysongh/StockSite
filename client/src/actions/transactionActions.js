import axios from '../axios-stocks';

import { GET_TRANSACTIONS, TRANSACTION_LOADING } from './types';

export const getTransactions = () => dispatch => {
    dispatch(setTransactionLoading());
    axios.get('/api/transactions/all')
        .then(res =>
            dispatch({
                type: GET_TRANSACTIONS,
                payload: res.data
            })
        )
        .catch(err => 
            dispatch({
                type: GET_TRANSACTIONS,
                payload: {}
            })
        );
};

export const setTransactionLoading = () => {
    return{
        type: TRANSACTION_LOADING
    };
};