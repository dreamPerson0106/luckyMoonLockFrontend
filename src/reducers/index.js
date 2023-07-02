import {
  ADD_ADDRESS,
  REMOVE_ADDRESS,
  CHANGE_THEME,
  CONV_ADDRESS,
} from "../actions/types";
import theme from "../assets/theme.json";

const initialState = {
  wallet_address: "",
  ...theme,
};

function rootReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_ADDRESS:
      return { ...state, wallet_address: payload };

    case CONV_ADDRESS:
      return { ...state, conv_address: payload };

    case REMOVE_ADDRESS:
      return { ...state, wallet_address: "" };

    case CHANGE_THEME:
      return { ...state, ...payload };

    default:
      return state;
  }
}

export default rootReducer;
