import axios from 'axios';
import {
  PORTFOLIO_ERROR,
  PORTFOLIO_LOADED,
  SET_LOADING,
  CLEAR_PORTFOLIO,
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
    });
  }
};

//Set state to loading
export const setLoading = () => async (dispatch) => {
  dispatch({ type: SET_LOADING });
};
