import {
  ADD_ADDRESS,
  CHANGE_CHAIN,
  CHANGE_THEME,
  REMOVE_ADDRESS,
  CHANGE_PAIRINFO,
} from "./types.js";

export const addAddress = (address) => ({
  type: ADD_ADDRESS,
  payload: address,
});

export const removeAddress = () => ({
  type: REMOVE_ADDRESS,
  payload: "",
});

export const changeTheme = (theme) => ({
  type: CHANGE_THEME,
  payload: theme,
});

export const changeChain = (chain) => ({
  type: CHANGE_CHAIN,
  payload: chain,
});

export const changePairInfo = (pairInfo) => ({
  type: CHANGE_PAIRINFO,
  payload: pairInfo,
});
