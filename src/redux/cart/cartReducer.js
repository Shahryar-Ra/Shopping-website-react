import * as act from './cart.actionTypes';
import { updateObject, addItemToCart } from '../utility';

const initialState = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case act.TOGGLE_CART_HIDDEN:
      return updateObject(state, { hidden: !state.hidden });
    case act.ADD_ITEM:
      return updateObject(state, {
        cartItems: addItemToCart(state.cartItems, payload),
      });

    default:
      return state;
  }
};

export default cartReducer;
