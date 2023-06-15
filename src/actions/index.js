import { ADD_ADDRESS, REMOVE_ADDRESS } from "../actions/types";

export const addAddress = (address) => ({
  type: ADD_ADDRESS,
  payload: address,
});
