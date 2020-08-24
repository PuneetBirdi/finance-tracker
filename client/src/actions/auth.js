import axios from 'axios';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  AUTH_ERROR,
  USER_LOADED,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  SET_LOADING,
  CLEAR_PROFILE,
} from './types';
import { setAlert } from './alert';
import setAuthToken from '../utils/setAuthToken';

//Load user
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  console.log('test');
  try {
    const res = await axios.get('/api/auth');
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

//Register User
export const register = (formData) => async (dispatch) => {
  dispatch(setLoading());
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.post('api/users', formData, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    loadUser();
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
      payload: err.response.data.msg,
    });
  }
};

//Login a User
export const login = (email, password) => async (dispatch) => {
  dispatch(setLoading());
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({ email, password });
  try {
    const res = await axios.post('api/auth', body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: LOGIN_FAIL,
      payload: err.response.data.msg,
    });
  }
};

//Logout user
export const logout = () => async (dispatch) => {
  dispatch({ type: CLEAR_PROFILE });
  dispatch({ type: LOGOUT });
};

//Set state to loading
export const setLoading = () => async (dispatch) => {
  dispatch({ type: SET_LOADING });
};
