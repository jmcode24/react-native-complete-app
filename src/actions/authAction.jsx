export const setAuthenticated = (authenticated) => {
  return {
    type: "SET_AUTHENTICATED",
    payload: authenticated,
  }
};