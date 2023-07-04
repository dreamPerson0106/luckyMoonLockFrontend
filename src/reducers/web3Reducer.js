import { ADD_ADDRESS, REMOVE_ADDRESS, CHANGE_CHAIN } from "../actions/types";

const initialState = {
  wallet_address: "",
  chain: "0x1",
  pairinfo: {
    balanceOf: "",
    token0: "",
    token1: "",
    error: false,
  },
};

const web3Reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_ADDRESS:
      return { ...state, wallet_address: payload };

    case REMOVE_ADDRESS:
      return { ...state, wallet_address: "" };

    case CHANGE_CHAIN:
      return { ...state, chain: payload };

    default:
      return state;
  }
};

export default web3Reducer;
