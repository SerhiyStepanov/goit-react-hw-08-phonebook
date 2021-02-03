export const getUserName = (state) => state.users.user.name;

export const getUserEmail = (state) => state.users.user.email;

export const getUserIsLoggedIn = (state) => state.users.isLoggedIn;

export const getIsFetchingCurrentUser = (state) =>
  state.users.isFetchingCurrentUser;
