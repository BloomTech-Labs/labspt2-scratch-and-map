export const UPDATE_LOGIN = "UPDATE_LOGIN";

export const updateIsLoggedIn = () => {
  return dispatch => {
    dispatch({ type: UPDATE_LOGIN });
  };
};
