import * as act from './cart.actionTypes';

export const toggleHidden = () => ({
  type: act.TOGGLE_CART_HIDDEN,
});

export const addItem = (payload) => ({
  type: act.ADD_ITEM,
  payload,
});
