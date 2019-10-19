const reducer = (state = {}, action) => {
    console.log('Inside Reducer');
    switch (action.type) {
        case 'GET_PRODUCTS':
            console.log(`GET PRODUCTS ${JSON.stringify(state)}`);
            return {...state, loading: true };
        case 'PRODUCTS_RECEIVED':
            //  debugger;
            console.log(`PRODUCTS RECEIVED ${JSON.stringify(state)}`);
            return {...state, products: action.json, loading: false };
        default:
            return state;
    }
};
export default reducer;