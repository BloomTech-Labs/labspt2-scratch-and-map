import { UPDATE_LOGIN } from "../actions/isLoggedInAction";

const initialState = {
  isLoggedIn: false
};

export const updateLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LOGIN:
      return { ...state, isLoggedIn: !state.isLoggedIn };
    default:
      return state;
  }
};
