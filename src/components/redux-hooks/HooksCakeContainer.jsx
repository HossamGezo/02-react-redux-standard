// - - - - - - - - - - Import Libraries
// *** React Redux
import {useDispatch, useSelector} from "react-redux";

// - - - - - - - - - - Import Redux Files
// *** buyCake Action
import {buyCake} from "../../redux/cake/cakeActions";

// - - - - - - - - - - Main Component
const HooksCakeContainer = () => {
  // State
  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);
  // Dispatch
  const dispatch = useDispatch();
  // Return JSX
  return (
    <div className="container">
      <div className="number-of-Cakes">
        Number Of Cakes Are : {numberOfCakes}
      </div>
      <button onClick={() => dispatch(buyCake())}>Buy A Cake</button>
    </div>
  );
};

// - - - - - - - - - - Export
export default HooksCakeContainer;
