import * as act from './cart.actionTypes';

const initialState = {
  hidden: true,
};

const cartReducer = (state = initialState, { type }) => {
  switch (type) {
    case act.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};

export default cartReducer;
