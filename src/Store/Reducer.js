const initialState = { 
    products: [],
    cart: [],
    itemCount: 0
};

export const reducer = (state = initialState, action) => {

    
 if (action.type === 'FETCH_POST_SUCCESS'){
     return { products :  action.products};
 }
 if (action.type === 'ADD_TO_CART'){
     return { 
         products: state.products,
         cart: [...(state.cart || []), action.item],
         itemCount: state.itemCount+1
        }
 }
}