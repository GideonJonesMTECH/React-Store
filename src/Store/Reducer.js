const initialState = { 
    products: [],
    cart: [],
    filteredProducts: []
};

export const reducer = (state = initialState, action) => {

    
 if (action.type === 'FETCH_POST_SUCCESS'){
     return {
        products:  action.products,
        cart: state.cart,
        filteredProducts: state.filteredProducts
    };
 }

 if (action.type === 'ADD_TO_CART'){
     console.log(action.item)
     return { 
         products: state.products,
         cart: [...(state.cart || []), action.item],
         filteredProducts: state.filteredProducts
        }
 }

 if(action.type === 'REMOVE_ITEM'){
     const tempCart = state.cart.filter((item) => item.id !== action.id)
     console.log(tempCart)
     return{
        products: state.products,
        cart: tempCart,
        filteredProducts: state.filteredProducts
     }
 }

 if(action.type === 'ON_CHANGE'){
     console.log(action.category)
     const filteredProducts = state.products.filter((item) => item.category === action.category);
     return {
         products: state.products,
         cart: state.cart,
         filteredProducts: filteredProducts
     }
 }

 if(action.type === 'CLEAR_CART'){
    return {
        products: state.products,
        cart: action.cart,
        filteredProducts: state.filteredProducts
    }
}

}