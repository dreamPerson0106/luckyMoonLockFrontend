import { ADD_ADDRESS, CHANGE_THEME } from "./types.js";
import { REMOVE_ADDRESS } from "../actions/types";

export const addAddress = (address) => ({
  type: ADD_ADDRESS,
  payload: address,
});

export const changeTheme = (theme) => ({
  type: CHANGE_THEME,
  payload: theme,
});
