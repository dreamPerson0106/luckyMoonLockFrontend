import {
  ADD_ADDRESS,
  REMOVE_ADDRESS,
  CHANGE_THEME,
  CHANGE_CHAIN,
} from "../actions/types";
import theme from "../assets/theme.json";

const initialState = {
  wallet_address: "",
  chain: "0x1",
  ...theme,
};

function rootReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_ADDRESS:
      return { ...state, wallet_address: payload };

    case REMOVE_ADDRESS:
      return { ...state, wallet_address: "" };

    case CHANGE_THEME:
      return { ...state, ...payload };

    case CHANGE_CHAIN:
      return { ...state, chain: payload };

    default:
      return state;
  }
}

export default rootReducer;
