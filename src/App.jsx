// Local Components
import ConnectCakeContainer from "./components/redux-connect/ConnectCakeContainer";
import ConnectIcecreamContainer from "./components/redux-connect/ConnectIcecreamContainer";
// Main Component
const App = () => {
  return (
    <>
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
    </>
  );
};

export default App;
