import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const ADDING_FRIEND = "ADDING_FRIEND";
export const ADD_SUCCESS = "ADD_SUCCESS";
export const ADD_FAIL = "ADD_FAIL";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });

  return axios
    .post("http://localhost:5000/api/login", creds)
    .then(res => {
      localStorage.setItem("token", res.data.payload);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data.payload
      });
    })
    .catch(err => {
      if (err.response && err.response.status === 403) {
        localStorage.removeItem("token");
      }
      dispatch({
        type: LOGIN_FAILURE,
        payload: err
      });
    });
};

export const getFriends = () => dispatch => {
  dispatch({ type: FETCH_START });

  axios
    .get("http://localhost:5000/api/friends", {
      headers: { authorization: localStorage.getItem("token") }
    })
    .then(res => {
      dispatch({
        type: FETCH_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: FETCH_FAIL,
        payload: err
      });
    });
};

export const addfriend = friend => dispatch => {
  dispatch({ type: ADDING_FRIEND });
  axios
    .post("http://localhost:3333/friends", friend)
    .then(res => dispatch({ type: ADD_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: ADD_FAIL, payload: err }));
};
