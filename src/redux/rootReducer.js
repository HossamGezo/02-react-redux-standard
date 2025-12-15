// - - - - - - - - - - Import Libraries
// *** Redux Library
import { combineReducers } from "redux";

// - - - - - - - - - - Import Redux Files
// *** Redux Reducer
import cakeReducer from "./cake/cakeReducer";
// *** Icecream Reducer
import icecreamReducer from "./icecream/icecreamReducer";

// - - - - - - - - - - Root Reducer
const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
});

export default rootReducer;
