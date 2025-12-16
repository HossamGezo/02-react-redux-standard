// - - - - - - - - - - Import Libraries
// *** Redux Library
import {combineReducers} from "redux";

// - - - - - - - - - - Import Redux Files
// *** Redux Reducers
import cakeReducer from "./cake/cakeReducer";
import icecreamReducer from "./icecream/icecreamReducer";
import fetchUsersReducer from "./user/userReducer";

// - - - - - - - - - - Root Reducer
const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
  users: fetchUsersReducer,
});

export default rootReducer;
