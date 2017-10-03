import { applyMiddleware, createStore } from "redux";

import appReducer from "./reducers/app";
import promiseMiddleware from "redux-promise-middleware";
import thunk from "redux-thunk";

let store = createStore(
  appReducer,
  applyMiddleware(promiseMiddleware()),
  applyMiddleware(thunk)
);

export default store;
