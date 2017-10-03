import { AUTHENTICATE, LOAD_PLAYER } from "../actions";

import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import isAuthenticated from "./isAuthenticated";
import player from "./player";

export default combineReducers({
  player,
  isAuthenticated,
  form: formReducer
});
