import { ADD_ADDRESS, REMOVE_ADDRESS } from "../actions/types";

const initialState = {
  wallet_address: "",
};

function rootReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_ADDRESS:
      break;

    default:
      break;
  }
}

export default rootReducer;
