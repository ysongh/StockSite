import axios from '../axios-lists';

import { GET_MONEY } from './types';

export const getMoney = (id) => dispatch => {
    axios.get(`/api/${id}`)
        .then(res =>
            dispatch({
                type: GET_MONEY,
                payload: res.data
            })
        )
        .catch(err => 
            dispatch({
                type: GET_MONEY,
                payload: {}
            })
        );
};