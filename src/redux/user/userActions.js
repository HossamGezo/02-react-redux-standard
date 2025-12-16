import axios from "axios";
import * as actions from "./userTypes";

export const fetchUsersRequest = () => {
  return {
    type: actions.FETCH_USERS_REQUEST,
  };
};

export const fetchUsersSuccess = (data) => {
  return {
    type: actions.FETCH_USERS_SUCCESS,
    payload: data,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: actions.FETCH_USERS_FAILURE,
    payload: error,
  };
};

export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch(fetchUsersRequest());
    try {
      const users = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      const usersData = users.data;
      dispatch(fetchUsersSuccess(usersData));
    } catch (error) {
      dispatch(fetchUsersFailure(error.message));
    }
  };
};
