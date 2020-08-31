import axios from 'axios';
import {
  PORTFOLIO_ERROR,
  PORTFOLIO_LOADED,
  SET_LOADING,
  CLEAR_PORTFOLIO,
  ACCOUNT_ERROR,
  CREATE_ACCOUNT,
} from './types';
import { setAlert } from './alert';
import setAuthToken from '../utils/setAuthToken';

//Load user
export const loadPortfolio = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get('/api/auth/portfolio');
    dispatch({
      type: PORTFOLIO_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PORTFOLIO_ERROR,
      payload: err.response.data.msg,
    });
  }
};

//create a new account
export const createAccount = (accountInfo) => async (dispatch) => {
  dispatch(setLoading());
  setAuthToken(localStorage.token);
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.post('/api/accounts', accountInfo, config);
    dispatch({
      type: CREATE_ACCOUNT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ACCOUNT_ERROR,
      payload: err.response.data.msg,
    });
  }
};

//Clear portfolio from state
export const clearPortfolio = () => async (dispatch) => {
  dispatch({
    type: CLEAR_PORTFOLIO,
  });
};

//Set state to loading
export const setLoading = () => async (dispatch) => {
  dispatch({ type: SET_LOADING });
};
