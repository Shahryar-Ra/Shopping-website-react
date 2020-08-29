import { combineReducers } from 'redux';

// importing slice reducers
import userReducer from './user/userReducer';
import cartReducer from './cart/cartReducer';

// combining reducers into rootReducer
export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
