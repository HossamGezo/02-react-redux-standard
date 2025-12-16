import * as actions from "./userTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const fetchUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actions.FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case actions.FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default fetchUsersReducer;
