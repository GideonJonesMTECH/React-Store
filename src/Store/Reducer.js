const initialState = { products: [] };

export const reducer = (state = initialState, action) => {
 const newState = {...state};
    
 if (action.type === 'FETCH_POSTS_SUCCESS'){
     console.log(action.products)
     return { products :  action.products};
 }
}