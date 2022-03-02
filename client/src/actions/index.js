import axios from 'axios';
const BASE_URL = process.env.DEV_DATABASE_URL;

// Action variables
export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';
export const ADD_USER = 'ADD_USER';

// Actions
export const fetchStart = () => {
  return({ type: FETCH_START });
};

export const fetchSuccess = (user) => {
  return({ type: FETCH_SUCCESS, payload: user });
};

export const fetchFail = (error) => {
  return({ type: FETCH_FAIL, payload: error });
};

export const addUser = (newUser) => {
  return({ type: ADD_USER, payload: newUser });
};

export const getAddUser = (newUser) => (dispatch) => {
  dispatch(addUser(newUser));
  axios.post(`${BASE_URL}`)
    .then(() => console.log('User successfully added!'))
    .catch(err => {
      dispatch(fetchFail(err));
    });
};