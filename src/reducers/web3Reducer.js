import {
  ADD_ADDRESS,
  REMOVE_ADDRESS,
  CHANGE_CHAIN,
  CHANGE_CONTRACT,
  CONV_ADDRESS,
} from "../actions/types";

const initialState = {
  wallet_address: "",
  chain: "0x1",
  contract: null,
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

    case CHANGE_CONTRACT:
      return { ...state, contract: payload };

    case CONV_ADDRESS:
      return { ...state, conv_address: payload };

    default:
      return state;
  }
};

export default web3Reducer;
