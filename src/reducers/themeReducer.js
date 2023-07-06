import { CHANGE_THEME } from "../actions/types";
import theme from "../assets/theme.json";

const initialState = {
  ...theme,
};

const themeReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CHANGE_THEME:
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default themeReducer;
