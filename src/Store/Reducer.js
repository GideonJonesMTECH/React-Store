const initialState = { products: [] };

export const reducer = (state = initialState, action) => {
 const newState = {...state};
    
 if (action.type === 'FETCH_POST_SUCCESS'){
     return { products :  action.products};
 }
}