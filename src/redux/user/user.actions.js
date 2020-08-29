import * as act from './user.actionTypes';

export const setCurrentUser = (user) => ({
  type: act.SET_CURRENT_USER,
  payload: user,
});

export const clearUser = (payload) => ({
  type: act.CLEAR_USER,
  payload,
});
