import axios from 'axios';
import { useHistory } from 'react-router-dom';

// Action types
export const ADD_USER_START = 'ADD_USER_START';
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
export const ADD_USER_FAIL = 'ADD_USER_FAIL';

// Actions
export const addUser = (newUser) => (dispatch) => {
  dispatch({type: ADD_USER_START});
  axios.post('https://fam-recipes-app.herokuapp.com/api/users', newUser)
    .then(res => {
      console.log('RESS', res.data);
      dispatch({ type: ADD_USER_SUCCESS, payload: {username: res.data.username, password: res.data.password }});
      useHistory().push('/login');
    })
    .catch(err => {
      dispatch({ type: ADD_USER_FAIL, payload: err });
    });
};