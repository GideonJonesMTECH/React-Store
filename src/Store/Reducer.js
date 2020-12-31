const initialState = { 
    products: [],
    cart: []
};

export const reducer = (state = initialState, action) => {

    
 if (action.type === 'FETCH_POST_SUCCESS'){
     return { products :  action.products};
 }

 if (action.type === 'ADD_TO_CART'){
     console.log(action.item)
     return { 
         products: state.products,
         cart: [...(state.cart || []), action.item],
        }
 }

 if(action.type === 'REMOVE_ITEM'){
     const tempCart = state.cart.filter((item) => item[4] !== action.id)
     console.log(tempCart)
     return{
        products: state.products,
        cart: [tempCart]
     }
 }

}