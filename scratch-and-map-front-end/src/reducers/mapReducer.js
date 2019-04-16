import {
  FETCHING,
  SUCCESS,
  ERROR,
  REFRESH,
  REFRESH_FALSE
} from "../actions/mapActions";

const initialState = {
  userData: [],
  userCountryData: [],
  loading: true,
  error: "",
  refresh: false
};

export const getUserDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return { ...state, loading: true };
    case SUCCESS:
      return {
        ...state,
        userData: action.payload,
        userCountryData: action.payload.user_countries,
        loading: false
      };
    case ERROR:
      return { ...state, error: action.payload, loading: false };
    case REFRESH:
      return { ...state, refresh: action.payload };
    case REFRESH_FALSE:
      return { ...state, refresh: action.payload };
    default:
      return state;
  }
};
