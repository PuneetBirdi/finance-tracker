import axios from 'axios';
import {
  GET_TRANSACTIONS,
  NEW_TRANSACTION,
  SET_LOADING,
  TRANSACTION_ERROR,
} from './types';
import { setAlert } from './alert';
import setAuthToken from '../utils/setAuthToken';

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
  } catch (err) {
    dispatch({
      type: TRANSACTION_ERROR,
      payload: err,
    });
  }
};

//Get all transactions by account
export const getTransactions = (account) => async (dispatch) => {
  try {
    const res = await axios.get(`api/transactions/${account}`);
    dispatch({
      type: GET_TRANSACTIONS,
      payload: res.data,
    });
  } catch (err) {
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
