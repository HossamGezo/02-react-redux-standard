// - - - - - - - - - - Import Libraries
// *** React Redux
import {connect} from "react-redux";

// - - - - - - - - - - Import Redux Filex
import {buyIcecream} from "../../redux/icecream/icecreamActions";

// - - - - - - - - - - Main Component
const ConnectIcecreamContainer = (props) => {
  return (
    <div className="container">
      <div className="number-of-Icecreams">
        Number Of Icecreams Are : {props.numberOfIcecreams}
      </div>
      <button onClick={props.buyIcecream}>Buy An Icecream</button>
    </div>
  );
};
// - - - - - - - - - - Connect Redux Functions
// *** Map State To Props
const mapStateToProps = (state) => {
  return {
    numberOfIcecreams: state.icecream.numberOfIcecreams,
  };
};
// *** Map Dispatch To Props
const mapDispatchToProps = (dispatch) => {
  return {
    buyIcecream: () => dispatch(buyIcecream()),
  };
};

// - - - - - - - - - - Export
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectIcecreamContainer);
