const initialState = {
  products: [],
  cart: [],
};

export const reducer = (state = initialState, action) => {
  if (action.type === "FETCH_POST_SUCCESS") {
    return { products: action.products };
  }
  if (action.type === "ADD_TO_CART") {
    return {
      products: state.products,
      cart: [...(state.cart || []), action.item],
    };
  }
};
