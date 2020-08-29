import * as act from './user.actionTypes';
import { updateObject } from '../utility';

const initialState = {
  currentUser: null,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case act.SET_CURRENT_USER:
      return updateObject(state, { currentUser: payload });

    default:
      return state;
  }
};

export default userReducer;
