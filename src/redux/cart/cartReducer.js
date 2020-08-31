import * as act from './cart.actionTypes';
import { updateObject, addItemToCart, removeItemFromCart } from '../utility';

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
    case act.CLEARE_ITEM_FROM_CART:
      return updateObject(state, {
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== payload.id
        ),
      });
    case act.REMOVE_ITEM:
      return updateObject(state, {
        cartItems: removeItemFromCart(state.cartItems, payload),
      });

    default:
      return state;
  }
};

export default cartReducer;
