import axios from 'axios';
import {
  PORTFOLIO_ERROR,
  PORTFOLIO_LOADED,
  SET_LOADING,
  CLEAR_PORTFOLIO,
  ACCOUNT_ERROR,
  CREATE_ACCOUNT,
  CLEAR_ERROR,
} from './types';
import { newTransaction } from './transaction';
import setAuthToken from '../utils/setAuthToken';

//Load user
export const loadPortfolio = () => async (dispatch) => {
  setLoading();
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
  const newAccount = {
    type: accountInfo.type,
    name: accountInfo.name,
    balance: 0.0,
  };
  setAuthToken(localStorage.token);
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.post('/api/accounts', newAccount, config);
    dispatch({
      type: CREATE_ACCOUNT,
      payload: res.data,
    });

    const initial = {
      account: res.data._id,
      type: 'deposit',
      amount: accountInfo.balance,
      description: 'initial balance',
    };
    dispatch(newTransaction(initial));
    return true;
  } catch (err) {
    dispatch({
      type: ACCOUNT_ERROR,
      payload: err.response.data.msg,
    });

    setTimeout(() => {
      dispatch({ type: CLEAR_ERROR });
    }, 3000);
    return false;
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
