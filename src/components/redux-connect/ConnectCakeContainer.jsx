// - - - - - - - - - - Import Libraries
// *** React Redux
import {connect} from "react-redux";

// - - - - - - - - - - Import Redux Files
// *** buyCake File
import {buyCake} from "../../redux/cake/cakeActions";

// - - - - - - - - - - Main Component
const ConnectCakeContainer = (props) => {
  return (
    <div className="container">
      <div className="number-of-cakes">
        Number Of Cakes Are : {props.numberOfCakes}
      </div>
      <button onClick={props.buyCake}>Buy A Cake</button>
    </div>
  );
};

// - - - - - - - - - - Redux Connect Functions
// *** Map State To Props
const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.cake.numberOfCakes,
  };
};
// *** Map Dispatch To Props
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

// - - - - - - - - - - Export
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectCakeContainer);
