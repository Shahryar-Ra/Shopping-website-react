const initialState = {
  currentUser: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload,
      };
    case 'CLEAR_USER':
      return {
        currentUser: null,
      };
    default:
      return state;
  }
};

export default userReducer;
