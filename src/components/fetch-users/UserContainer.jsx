// - - - - - - - - - - Import Libraries
// *** React Hooks
import {useEffect} from "react";
// *** React Redux Hooks
import {useDispatch, useSelector} from "react-redux";

// - - - - - - - - - - Import Redux Files
// *** Fetch Users Funtion
import {fetchUsers} from "../../redux/user/userActions";

// - - - - - - - - - - Main Component
const UserContainer = () => {
  // *** Destructuring React Redux Hooks
  const state = useSelector((state) => state.users);
  const dispatch = useDispatch();
  // Fetching Data
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  // *** Return JSX
  return (
    <div className="user-container">
      {state.loading && <div>Loading Data....</div>}
      {!state.loading && state.error.length === 0 ? (
        <div className="users-data">
          {state.data.map((user) => (
            <div key={user.id}>
              {user.id}_{user.name}
            </div>
          ))}
        </div>
      ) : (
        <div>{state.error}</div>
      )}
    </div>
  );
};

export default UserContainer;
