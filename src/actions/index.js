import { ADD_ADDRESS, CHANGE_THEME } from "./types.js";

export const addAddress = (address) => ({
  type: ADD_ADDRESS,
  payload: address,
});

export const changeTheme = (theme) => ({
  type: CHANGE_THEME,
  payload: theme,
});
