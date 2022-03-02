import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL, ADD_USER } from '../actions';

export const initialState = {
  username: '',
  password: '',
  isLoading: false,
  error: ''
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_START:
      return {
        ...state,
        isLoading: true
      }
    case FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        username: action.payload,
        password: action.payload
      }
    case FETCH_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    case ADD_USER:
      return {
        ...state,
        username: action.payload,
        password: action.payload
      }
    default:
      return state
  };
};

export default reducer;