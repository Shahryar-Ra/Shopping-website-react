import shopData from './Shop.data';

const initialState = {
  collections: shopData,
};

const shopReducer = (state = initialState, { type, action }) => {
  switch (type) {
    default:
      return state;
  }
};

export default shopReducer;
