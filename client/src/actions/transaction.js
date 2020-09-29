import axios from 'axios';
import {
  GET_TRANSACTIONS,
  NEW_TRANSACTION,
  SET_LOADING,
  TRANSACTION_ERROR,
  CLEAR_ERROR,
} from './types';
import setAuthToken from '../utils/setAuthToken';
import { loadPortfolio } from './portfolio';

//Write a new transaction
export const newTransaction = (transaction) => async (dispatch) => {
  setAuthToken(localStorage.token);
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.post('api/transactions', transaction, config);
    dispatch({
      type: NEW_TRANSACTION,
      payload: res.data,
    });
    dispatch(loadPortfolio());
    return true;
  } catch (err) {
    dispatch({
      type: TRANSACTION_ERROR,
      payload: err.response.data.msg,
    });
    setTimeout(() => {
      dispatch({ type: CLEAR_ERROR });
    }, 3000);
    return false;
  }
};

//Get all transactions by account
export const getTransactions = (account) => async (dispatch) => {
  setAuthToken(localStorage.token);
  setLoading();
  try {
    const res = await axios.get(`/api/transactions/${account}`);
    console.log(res);
    dispatch({
      type: GET_TRANSACTIONS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: TRANSACTION_ERROR,
      payload: err,
    });
  }
};

//Set state to loading
export const setLoading = () => async (dispatch) => {
  dispatch({ type: SET_LOADING });
};
