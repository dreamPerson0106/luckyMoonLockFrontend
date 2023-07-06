import {
  ADD_ADDRESS,
  REMOVE_ADDRESS,
  CHANGE_CHAIN,
  CHANGE_PAIRINFO,
} from "../actions/types";

const initialState = {
  wallet_address: "",
  chain: "0x1",
  pairInfo: {
    balanceOf: "0",
    token0: "",
    token1: "",
    pairAddress: "",
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

    case CHANGE_PAIRINFO:
      return { ...state, pairInfo: payload };

    default:
      return state;
  }
};

export default web3Reducer;
