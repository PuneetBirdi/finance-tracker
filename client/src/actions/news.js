import axios from 'axios';
import { GET_NEWS, CLEAR_NEWS, NEWS_ERROR, SET_LOADING } from './types';

const publicAPI = axios.create({
  headers: {
    common: null,
  },
});

//get news articles
export const getNews = () => async (dispatch) => {
  try {
    const res = await publicAPI.get(
      'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=83a24ad5547d4a6d97a6406fb2b9a55e'
    );
    console.log(res);
    dispatch({
      type: GET_NEWS,
      payload: res.data.articles,
    });
  } catch (err) {
    dispatch({
      type: NEWS_ERROR,
      payload: err,
    });
  }
};

//clear news articles from state
export const clearNews = () => async (dispatch) => {
  dispatch({
    type: CLEAR_NEWS,
  });
};

//set loading
export const setLoading = () => async (dispatch) => {
  dispatch({
    type: SET_LOADING,
  });
};
