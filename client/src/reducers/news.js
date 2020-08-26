import {
  GET_NEWS,
  CLEAR_NEWS,
  NEWS_ERROR,
  SET_LOADING,
} from '../actions/types';

const initialState = {
  articles: [''],
  loading: false,
  error: null,
};

export default function(state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    case GET_NEWS:
      return {
        ...state,
        articles: payload,
        loading: false,
      };
    case CLEAR_NEWS:
      return {
        ...state,
        articles: null,
      };
    case NEWS_ERROR:
      return {
        ...state,
        error: payload,
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
