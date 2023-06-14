import { ADD_ADDRESS, REMOVE_ADDRESS } from "./types.js";

export const addAddress = (address) => ({
  type: ADD_ADDRESS,
  payload: address,
});
