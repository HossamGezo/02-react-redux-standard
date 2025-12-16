// - - - - - - - - - - Local Components
// *** Redux Connect Method
import ConnectCakeContainer from "./components/redux-connect/ConnectCakeContainer";
import ConnectIcecreamContainer from "./components/redux-connect/ConnectIcecreamContainer";
// *** Redux Hooks
import HooksIcecreamContainer from "./components/redux-hooks/HooksIcecreamContainer";
import HooksCakeContainer from "./components/redux-hooks/HooksCakeContainer";
// *** Redux Thunk (Fetch Users)
import UserContainer from "./components/fetch-users/UserContainer";

// - - - - - - - - - - Main Component
const App = () => {
  return (
    <>
      {/* Redux Connect Method */}
      <h1 style={{textAlign: "center"}}>
        Using Connect Method From React Redux
      </h1>
      <div
        className="react-redux-connect"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "50px",
        }}
      >
        <ConnectCakeContainer />
        <ConnectIcecreamContainer />
      </div>
      <hr />
      {/* Redux Hooks */}
      <h1 style={{textAlign: "center"}}>Using Hooks From React Redux</h1>
      <div
        className="react-redux-connect"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "50px",
        }}
      >
        <HooksCakeContainer />
        <HooksIcecreamContainer />
      </div>
      <hr />
      {/* Fetch Users */}
      <h1 style={{textAlign: "center"}}>Using Redux Thunk (Fetch Users)</h1>
      <div
        className="react-redux-connect"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "50px",
        }}
      >
        <UserContainer />
      </div>
    </>
  );
};

export default App;
