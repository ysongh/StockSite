const initialState = {
    user: {}
};
 export default function(state = initialState, action){
    switch (action.type) {
        case 'GET_MONEY':
            return{
                ...state,
                user: action.payload
            };
        default:
            return state;
    }
}