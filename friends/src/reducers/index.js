import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAIL,
  ADDING_FRIEND,
  ADD_SUCCESS,
  ADD_FAIL
} from "../actions";

const initialState = {
  friends: [],
  fetchingFriends: false,
  loggingIn: false,
  loggedIn: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START: {
      return {
        ...state,
        loggingIn: true
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        loggingIn: false,
        loggedIn: true
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        error: "failed login",
        loggingIn: false
      };
    }
    case FETCH_START:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        friends: [...state.friends, ...action.payload],
        isFetching: false
      };
    case FETCH_FAIL:
      return {
        ...state,
        error: action.payload
      };
    case ADDING_FRIEND:
      return {
        ...state,
        addingSmurf: true
      };
    case ADD_SUCCESS:
      return {
        ...state,
        friends: [...action.payload],
        addingSmurf: false
      };
    case ADD_FAIL:
      return {
        ...state,
        addingSmurf: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
