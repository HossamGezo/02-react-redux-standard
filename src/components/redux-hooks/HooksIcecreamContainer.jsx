// - - - - - - - - - - Import Libraries
// *** React Redux
import {useDispatch, useSelector} from "react-redux";
// - - - - - - - - - - Import Redux Files
// *** buyIcecream Action
import {buyIcecream} from "../../redux/icecream/icecreamActions";

// - - - - - - - - - - Main Component
const HooksIcecreamContainer = () => {
  // State
  const numberOfIcecreams = useSelector(
    (state) => state.icecream.numberOfIcecreams
  );
  // Dispatch
  const dispatch = useDispatch();
  // Return JSX
  return (
    <div className="container">
      <div className="number-of-Icecreams">
        Number Of Icecreams Are : {numberOfIcecreams}
      </div>
      <button onClick={() => dispatch(buyIcecream())}>Buy An Icecream</button>
    </div>
  );
};

// - - - - - - - - - - Export
export default HooksIcecreamContainer;
