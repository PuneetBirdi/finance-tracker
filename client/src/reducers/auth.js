import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_LOADING,
  CLEAR_PROFILE,
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  error: null,
};

export default function(state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        token: payload.token,
        user_id: payload._id,
        created: payload.created,
        email: payload.email,
        error: null,
        isAuthenticated: true,
        loading: false,
      };
    case CLEAR_PROFILE:
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        isAuthenticated: null,
        loading: false,
        error: null,
      };
    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
      return{
        ...state,
        error: payload,
        loading:false
      }
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        error: null,
        token: payload.token,
        user_id: payload._id,
        created: payload.created,
        email: payload.email,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
