// - - - - - - - - - - Import Libraries
// *** React
import {createRoot} from "react-dom/client";
// *** React Redux
import {Provider} from "react-redux";

// - - - - - - - - - - Import Components
// *** App Component
import App from "./App.jsx";
// *** Redux Store
import store from "../src/redux/store.js";

// - - - - - - - - - - Import Styles
// *** Index Style
import "./index.css";

// - - - - - - - - - - Main Component
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
