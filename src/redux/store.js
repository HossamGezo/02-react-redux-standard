// - - - - - - - - - - Import Libraries
// *** React Redux
import {applyMiddleware, createStore} from "redux";
// *** Redux Logger
import logger from "redux-logger";
// *** Redux Dev Tools Extension
import {composeWithDevTools} from "redux-devtools-extension";

// - - - - - - - - - - Import Redux Files
// *** Root Reducer File
import rootReducer from "./rootReducer";

// - - - - - - - - - - Store
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
