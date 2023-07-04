import { combineReducers } from "redux";
import theme from "./themeReducer";
import web3 from "./web3Reducer";

const rootReducer = combineReducers({
  theme,
  web3,
});

export default rootReducer;
