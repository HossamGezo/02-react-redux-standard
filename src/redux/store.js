// - - - - - - - - - - Import Libraries
// *** React Redux
import {applyMiddleware, createStore} from "redux";
// *** Redux Logger
import logger from "redux-logger";
// *** Redux Dev Tools Extension
import { composeWithDevTools } from "redux-devtools-extension";
// *** Redux Thunk
import thunk from "redux-thunk";

// - - - - - - - - - - Import Redux Files
// *** Root Reducer File
import rootReducer from "./rootReducer";

// - - - - - - - - - - Store
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
