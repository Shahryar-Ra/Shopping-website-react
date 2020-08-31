import * as act from './cart.actionTypes';

export const toggleHidden = () => ({
  type: act.TOGGLE_CART_HIDDEN,
});

export const addItem = (payload) => ({
  type: act.ADD_ITEM,
  payload,
});

export const clearItemFromCart = (payload) => ({
  type: act.CLEARE_ITEM_FROM_CART,
  payload,
});

export const removeItem = (payload) => ({
  type: act.REMOVE_ITEM,
  payload,
});
